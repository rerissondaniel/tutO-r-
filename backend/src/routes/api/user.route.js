const router = require('express').Router();
const userCtrl = require('../../controllers/user.controller');

router.post('/', userCtrl.create);
router.get('/:name', userCtrl.get);

module.exports = router;