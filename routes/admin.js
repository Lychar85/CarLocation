const router = require('express').Router(),
        adminController = require('../controllers/admin');

router.get('/', adminController.getadmin)


router.get('/addcar',adminController.getaddcar)

module.exports = router