const router = require('express').Router();

const certRoutes = require('./certification-routes');
const empRoutes = require('./employee-routes');
const stationRoutes = require('./station-routes');

router.use('/', certRoutes);
router.use('/', empRoutes);
router.use('/', stationRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;