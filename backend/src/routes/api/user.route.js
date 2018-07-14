const router = require('express').Router();
const userCtrl = require('../../controllers/user.controller');
const interceptor = require('../../controllers/interceptors/user.interceptor');

router.post('', userCtrl.create);
router.get('', interceptor.authenticate, userCtrl.get);
router.put('', interceptor.authenticate, userCtrl.update);

module.exports = router;