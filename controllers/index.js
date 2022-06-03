const router = require('express').Router();

const certRoutes = require('./certification-routes');
const empRoutes = require('./employee-routes');
const stationRoutes = require('./station-routes');

router.get('/', (req, res) => {
    res.render('login')
})

// router.use('/', certRoutes);
// router.use('/', empRoutes);
// router.use('/', stationRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;