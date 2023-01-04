const { default: mongoose } = require('mongoose')
const Appointment = require('../models/appointment')
const Feedback = require('../models/appointment')
const { Schema } = mongoose
const ObjectID = mongoose.Types.ObjectId
module.exports = {
    create,
    delete: deleteFeedback,
    edit,
    update
}

function create(req, res){
    Appointment.findById(req.params.id, function(err, appointment){
        req.body.user = req.user._id,
        req.body.userName = req.user.userName,
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
        // if (!feedback.user.equals(req.user._id)) return res.redirect(`/appointments/${appointment._id}`)
        feedback.remove()
        appointment.save().then(function() {
            res.redirect(`/appointments/${appointment._id}`)
        }).catch(function(err) {
            return next(err)
        })

    })
}
function edit(req, res){
    res.render('appointments/edit', {feedback: req.params.id})
}

function update (req,res,next){
    Feedback.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((feedback) => {
        res.redirect(`/feedbacks/${feedback._id}`)
    })
    .catch(next)

    // Appointment.findByIdAndUpdate(req.params.id, req.body, function(err, feedback){
    //     Appointment.save()
    //     res.redirect(`/feedbacks/${feedback._id}`)
    // })

}
