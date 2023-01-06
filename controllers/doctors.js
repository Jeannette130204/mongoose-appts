const { router } = require("../server")

module.exports = {
    index,
    indexS,
    indexD,
    indexC,
    indexK
}
function index(req, res, doctors) {
    res.render('doctors/index', { title: 'Meet our doctors', doctors })
}

function indexS(req, res, stephen) {
    res.render('doctors/stephen', { title: 'Doctor Stephen', stephen })
}
function indexD(req, res, daisy) {
    res.render('doctors/daisy', { title: 'Doctor Daisy', daisy })
}
function indexC(req, res, charles) {
    res.render('doctors/charles', { title: 'Doctor Charles', charles })
}
function indexK(req, res, kevin) {
    res.render('doctors/kevin', { title: 'Doctor Kevin', kevin })
}