const router = require('express').Router(),
        adminController = require('../controllers/admin');

router.get('/', adminController.getadmin)

module.exports = router