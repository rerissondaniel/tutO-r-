const router = require('express').Router();
const submissionCtrl = require('../../../controllers/submission.controller');
const interceptor = require('../../../controllers/interceptors/user.interceptor');

router.get('/:handle', interceptor.authenticate, submissionCtrl.get);

module.exports = router;