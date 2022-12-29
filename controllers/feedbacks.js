

function create(req, res){
    Movie.findById(req.params.id, function(err, appointments){
        req.body.user = req.user.appointments,
        req.body.userName = req.user.userName,
        req.body.userAvatar = req.user.avatar
    })
}
function deleteFeedback(req,res){


    if(!feedbackSchema.user.equals(req.user._id)) return res.redirect('/appointment')
}