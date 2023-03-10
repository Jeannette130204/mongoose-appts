var express = require('express');
var router = express.Router();
const appointmentsCtrl = require('../controllers/appointments')
const isLoggedIn = require('../config/auth');

router.get('/', appointmentsCtrl.index)

router.post('/', appointmentsCtrl.create)

router.get('/new', appointmentsCtrl.new)

router.get('/:id',appointmentsCtrl.show)

router.get('/:id/edit', appointmentsCtrl.edit)

router.delete('/:id', appointmentsCtrl.delete)

router.put('/:id', appointmentsCtrl.update)


// router.delete('/:id', appointmentsCtrl.delete)

module.exports = router;
