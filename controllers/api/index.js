//   --------- API ROUTES ------

const router = require('express').Router();

const homeRoutes = require('../home-routes');
const empRoutes = require('./employee-routes.js');
const stationRoutes = require('./station-routes.js');
const certRoutes = require('./certification-routes.js');

router.use('/employee', empRoutes);
router.use('/certification', certRoutes);
router.use('/station', stationRoutes);
router.use('/', homeRoutes);



router.get('/', (req, res) => {
    res.render('login')
})

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;