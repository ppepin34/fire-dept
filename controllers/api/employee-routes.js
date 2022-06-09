const router = require('express').Router();

// GET /api/employee
const { Employee, Certification, Station, EmployeeCert } = require('../../models');


// find all employees

router.get('/', (req, res) => {
    Employee.findAll({
        attributes: { exclude: ['password'] }
    })
        .then(dbEmpData => res.json(dbEmpData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET /api/employee/ID
// find one employee
router.get('/:id', (req, res) => {
    Employee.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },

        include: [
            {
                model: Certification,
                attributes: ['id', 'cert_name']
            },
            {
                model: Station,
                attributes: ['id', 'station_name']
            }
        ]
    })
        .then(dbEmpData => {
            if (!dbEmpData) {
                res.status(404).json({ message: 'No employee found with this id' });
                return;
            }
            res.json(dbEmpData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST /api/employee
router.post('/', (req, res) => {
    Employee.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        email: req.body.email,
        rank: req.body.rank,
        password: req.body.password,
        station_id: req.body.station_id,
        certIds: req.body.certIds
    })
        .then((dbEmpData) => {
            // if employee has certs, create pairings to bulk create in EmployeeCert
            if (req.body.certIds.length) {
                const employeeCertIdArr = req.body.certIds.map((cert_id) => {
                    return {
                        employee_id: dbEmpData.id,
                        cert_id
                    };
                });
                return EmployeeCert.bulkCreate(employeeCertIdArr);
            }
            // if no certs, respond
            res.status(200).json(dbEmpData);
        })
        .then((EmployeeCertIds) => res.status(200).json(EmployeeCertIds))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// POST api/employee/login
router.post('/login', (req, res) => {
    Employee.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbEmpData => {
        if (!dbEmpData) {
            res.status(400).json({ message: 'No employee with this email address' });
            return;
        }
        const validatePassword = dbEmpData.checkPassword(req.body.password);

        if (!validatePassword) {
            res.status(400).json({ message: 'Incorrect password' });
            return;
        }
        res.json({ employee: dbEmpData, message: 'You are now logged in' });
    });
});

// PUT /api/employee/1
router.put('/:id', (req, res) => {
    Employee.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
        .then((employee) => {
            // find all associated certs from EmployeeCert
            console.log(req.params.id)
            return EmployeeCert.findAll({ where: { employee_id: req.params.id } });
        })
        .then((employeeCert) => {
            // get list of current cert_ids
            const employeeCertIds = employeeCert.map(({ cert_id }) => cert_id);
            // create filtered list of new cert_ids
            const newEmployeeCerts = req.body.certIds
                .filter((cert_id) => !employeeCertIds.includes(cert_id))
                .map((cert_id) => {
                    return {
                        employee_id: req.params.id,
                        cert_id,
                    };
                });
            // figure out which ones to remove
            const employeeCertsToRemove = employeeCert
                .filter(({ cert_id }) => !req.body.certIds.includes(cert_id))
                .map(({ id }) => id);

            // run both actions
            return Promise.all([
                EmployeeCert.destroy({ where: { id: employeeCertsToRemove } }),
                EmployeeCert.bulkCreate(newEmployeeCerts),
            ]);
        })
        .then((updatedEmployeeCerts) => res.json(updatedEmployeeCerts))
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
});

// DELETE /api/employee/1
router.delete('/:id', (req, res) => {
    Employee.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbEmpData => {
            if (!dbEmpData) {
                res.status(404).json({ message: 'No employee found with this id' });
                return;
            }
            res.json(dbEmpData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    else {
        res.status(404).end();
    }
});

module.exports = router;
