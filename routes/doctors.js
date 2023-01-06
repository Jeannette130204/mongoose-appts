var express = require('express');
var router = express.Router();
const doctorsCtrl = require('../controllers/doctors')

router.get('/doctors', doctorsCtrl.index)
router.get('/doctors/stephen', doctorsCtrl.indexS)
router.get('/doctors/daisy', doctorsCtrl.indexD)
router.get('/doctors/charles', doctorsCtrl.indexC)
router.get('/doctors/kevin', doctorsCtrl.indexK)

module.exports = router