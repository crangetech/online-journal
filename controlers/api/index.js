const router = require('express').Router();
const userRoutes=require('./api/user-routes.js')
const apiRoutes = require('./api/');
const homeRoutes = require('../home-routes.js');
const journalRoutes = require('./journal-routes.js');

router.use('/', homeRoutes);
router.use('/dashboard', journalRoutes);
router.use('/api', apiRoutes);
router.use('/user-routes.js', userRoutes);


module.exports = router;