// ------ CERTIFICATION ROUTES --------

const router = require('express').Router();
const { Employee, Certification, Station } = require('../../models');
const withAuth = require('../../utils/auth')

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
// Create new certification
router.post('/', withAuth, (req, res) => {
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
// Update certification by id
router.put('/:id', withAuth, (req, res) => {
    Certification.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(dbCertData => {
        if (!dbCertData[0]) {
          // if no certification found by input id
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
// Delete certification by id
router.delete('/:id', withAuth, (req, res) => {
  Certification.destroy({
      // where to look
    where: {
        // by id
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

  //  export this file to have access in other files
module.exports = router;