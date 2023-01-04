var express = require('express');
var router = express.Router();
var passport = require('passport')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('../views/index', { title: 'The appointment system' });
});
router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile','email']
  }
))
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
  successRedirect: '/appointments',
  failureRedirect: '/appointments'
}
))
router.get('/logout', function(req,res){
  req.logout(function(){
    res.redirect('/appointments')
  })
})
module.exports = router;
