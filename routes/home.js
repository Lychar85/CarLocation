const router = require('express').Router(),
      homeController = require('../controllers/home');


router.get('/', homeController.homeGet)

module.exports = router;