const router = require('express').Router(),
        adminController = require('../controllers/admin');

router.get('/', adminController.getadmin)


router.get('/addcar',adminController.getaddcar)
router.post('/addcar', adminController.postcar)

module.exports = router