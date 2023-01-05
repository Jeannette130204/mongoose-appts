var express = require('express');
var router = express.Router();
const doctorsCtrl = require('../controllers/doctors')

router.get('/doctors', doctorsCtrl.index)

module.exports = router