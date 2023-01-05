const { router } = require("../server")

module.exports={
    index
}
function index(req, res, doctors){
        res.render('doctors/index', { title: 'Meet our doctors', doctors })
    }
