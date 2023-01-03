var express = require('express');
var router = express.Router();
const appointmentsCtrl = require('../controllers/appointments')
const isLoggedIn = require('../config/auth');
/* GET users listing. */
router.get('/', appointmentsCtrl.index)

router.post('/', appointmentsCtrl.create)

router.get('/new', appointmentsCtrl.new)

router.get('/:id',appointmentsCtrl.show)

router.delete('/:id', appointmentsCtrl.delete)

// router.delete('/:id', appointmentsCtrl.delete)

module.exports = router;
