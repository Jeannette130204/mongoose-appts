const Appointment = require('../models/appointment')
module.exports = {
    index,
    show,
    new: newAppointment,
    create,
    delete: deleteAppointment,
    edit,
    update
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
    res.render('appointments/new', { title: 'New Appointments' })
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
        appointment.save().then(function () {
            res.redirect('/appointments')
        }).catch(function (err) {
            return next(err)
        })
    })
}
function edit(req, res) {
    // res.render('appointments/edit', { feedback: req.params.id })
    Appointment.findById(req.params.id, (err, foundAppointment) => {
        console.log(foundAppointment)
        res.render('appointments/edit', {
            appointment: foundAppointment
        })
      })
}
function update(req, res) {
    // Appointment.update(req.params.id, req.body)
    // res.redirect('/appointments')
    Appointment.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        },
        (err, updatedAppointment) => {
            console.log(err)
            console.log(updatedAppointment)
            res.redirect(`/appointments/${req.params.id}`);
        }
    )

}

