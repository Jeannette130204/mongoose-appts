const appointment = require('../models/appointment')
const Appointment=require('../models/appointment')
module.exports={
    index,
    new: newAppointment,
    create
}

function index(req, res){
    Appointment.find({}, function(err,appointments){
    res.render('appointments/index',{title:'All Appointments', appointments })
    })
}
function newAppointment(req,res){
    res.render('appointments/new', {title:'All Appointments'})
}
function create(req,res){
    appointment.save(function(err){
        if (err)return res.render('appointments/new')
        res.redirect('/appointments')
    })
}