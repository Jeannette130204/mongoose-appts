const Appointment = require('../models/appointment')
module.exports = {
    index,
    show,
    new: newAppointment,
    create,
    delete: deleteAppointment
}

function index(req, res) {
    Appointment.find({}, function (err, appointments) {
        res.render('appointments/index', { title: 'All Appointments', appointments })
    })
}
function show(req, res) {
    Appointment.findById(req.params.id, function (err, appointment) {
        res.render('appointments/show', { title: 'Appointment Detail', appointment })
    })
}
function newAppointment(req, res) {
    res.render('appointments/new', { title: 'All Appointments' })
}
function create(req, res) {
    const appointment = new Appointment(req.body)
    appointment.save(function (err) {
        if (err) return res.render('appointments/new')
        res.redirect('/appointments')
    })
}

function deleteAppointment(req, res, next) {
    Appointment.findById(req.params.id, function (err, appointment) {
        appointment.remove()
        appointment.save().then(function() {
            res.redirect('/appointments')
        }).catch(function(err) {
            return next(err)
        })



    })
}

