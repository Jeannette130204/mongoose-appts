const { default: mongoose } = require('mongoose')
const Appointment = require('../models/appointment')
const { Schema } = mongoose
const ObjectID = mongoose.Types.ObjectId
module.exports = {
    create,
    delete: deleteFeedback,
}

function create(req, res){
    Appointment.findById(req.params.id, function(err, appointment){
        req.body.user = req.user._id,
        req.body.userName = req.user.name,
        req.body.userAvatar = req.user.avatar

        appointment.feedbacks.push(req.body)
        appointment.save(function(err){
            res.redirect(`/appointments/${appointment._id}`)
        })
    })
}
function deleteFeedback(req,res){
    Appointment.findOne({'feedbacks._id': req.params.id}).then(function(appointment) {
        const feedback = appointment.feedbacks.id(req.params.id)
        if (!feedback.user.equals(req.user._id)) return res.redirect(`/appointments/${appointment._id}`)
        feedback.remove()
        appointment.save().then(function() {
            res.redirect(`/appointments/${appointment._id}`)
        }).catch(function(err) {
            return next(err)
        })

    })
}

