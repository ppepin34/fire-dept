const router = require('express').Router();

// GET /api/employee
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
        id: req.body.id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        email: req.body.email,
        rank: req.body.rank,
        password: req.body.password
    })
        .then(dbEmpData => res.json(dbEmpData))
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
        .then(dbEmpData => {
            if (!dbEmpData[0]) {
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




module.exports = router;
