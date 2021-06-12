const router = require('express').Router(),
      userController = require('../controllers/user');
        profilController =require('../controllers/profil')

router.get('/login', userController.loginGet)
router.post('/login', userController.loginpost)


router.get('/register', userController.registerGet)


router.get('/profil', profilController.profilGet)



module.exports = router;