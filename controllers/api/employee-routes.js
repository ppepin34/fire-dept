const router = require('express').Router();
const { Employee, Certification, Station } = require('../models');


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

// add an employee
router.post('/', (req, res) => {
    Employee.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
        .then(dbEmpData => res.json(dbEmpData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/login', (req, res) => {
    Employee.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbEmpData => {
        if (!dbEmpData) {
            res.status(400).json({ message: 'No user with this email address' });
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





module.exports = router;
