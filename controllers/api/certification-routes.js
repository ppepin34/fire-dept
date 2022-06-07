const router = require('express').Router();
const { Employee, Certification, Station } = require('../../models');

// GET /api/certification
router.get('/', (req, res) => {
    Certification.findAll()
    .then(dbCertData => res.json(dbCertData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err); 
    })
})

// GET /api/certification/1
router.get('/:id', (req, res) => {
    Certification.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(dbCertData => {
        if (!dbCertData) {
          res.status(404).json({ message: 'No certification found with this id' });
          return;
        }
        res.json(dbCertData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// POST /api/certification
router.post('/', (req, res) => {
    Certification.create({
      cert_name: req.body.cert_name,
    })
      .then(dbCertData => res.json(dbCertData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// PUT /api/certification/1
router.put('/:id', (req, res) => {
    Certification.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(dbCertData => {
        if (!dbCertData[0]) {
          res.status(404).json({ message: 'No certification found with this id' });
          return;
        }
        res.json(dbCertData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
// DELETE /api/certification/1
router.delete('/:id', (req, res) => {
    Certification.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbCertData => {
        if (!dbCertData) {
          res.status(404).json({ message: 'No certification found with this id' });
          return;
        }
        res.json(dbCertData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;