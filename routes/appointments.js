var express = require('express');
var router = express.Router();
const appointmentsCtrl = require('../controllers/appointments')

/* GET users listing. */
router.get('/', appointmentsCtrl.index)

router.post('/', appointmentsCtrl.create)

router.get('/new', appointmentsCtrl.new)
module.exports = router;
