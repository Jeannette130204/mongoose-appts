const mongoose = require('mongoose')
const Schema = mongoose.Schema


const feedbackSchema = new Schema({
    content: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
})

const appointmentSchema = new Schema({
    location: String,
    doctor: String,
    date: {
        type: Date,
        required: true
    },
    time: String,
    feedbacks: [feedbackSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Appointment', appointmentSchema)
// module.exports = mongoose.model('Feedback', feedbackSchema)

