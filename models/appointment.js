const mongoose = require('mongoose')
const Schema = mongoose.Schema

// const feedbackSchema = new Schema({
// user: {type:Schema.Types.ObjectId, ref: 'User',
// userName: String,
// userAvatar: String
// }
// })

const appointmentSchema = new Schema({
    location: String,
    doctor: String,
    date: Date,
    time: String
},{
    timestamps: true
});

module.exports = mongoose.model('Appointment', appointmentSchema)

