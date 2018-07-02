const router = require('express').Router();
const userCtrl = require('../../controllers/user.controller');

router.post('/', userCtrl.create);
router.get('', userCtrl.get);

module.exports = router;