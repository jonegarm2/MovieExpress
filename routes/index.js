var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { user: req.user });
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    // AYE THIS MIGHT CHANGE! pce out.
    // figure out views. route may change. TBD
    successRedirect : '/',
    failureRedirect : '/'
  }
));

router.get('/logout', function(req, res) {
  req.logout(); 
  res.redirect('/');
});

module.exports = router;
