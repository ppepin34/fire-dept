const router = require('express').Router();

const apiRoutes = require('./api');

const homeRoutes = require('./home-routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
// router.use((req, res) => {
// router.use('/', certRoutes);
// router.use('/', empRoutes);
// router.use('/', stationRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

router.use((req,res) => {
    res.status(404).end();
});

module.exports = router;