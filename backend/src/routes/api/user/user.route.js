const router = require('express').Router();
const userCtrl = require('../../../controllers/user.controller');
const interceptor = require('../../../controllers/interceptors/user.interceptor');

const submissions = require('./submissions.route');

router.post('', userCtrl.create);
router.get('', interceptor.authenticate, userCtrl.get);
router.put('', interceptor.authenticate, userCtrl.update);

router.use('/submissions', submissions);

module.exports = router;