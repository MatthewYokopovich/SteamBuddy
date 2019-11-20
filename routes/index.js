const path = require("path");
const axios = require("axios");
const router = require("express").Router();
passport = require('passport');
const apiRoutes = require("./api");

// API Routes

router.post('/auth/steam',
  passport.authenticate('steam', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/');
  });

router.get('/auth/steam/return', 
// function(req, res, next) {
//   console.log("stuff");
//   req.url = req.originalUrl;
//   next();
// },  
passport.authenticate('steam'),
    function(request, response) {
        console.log(request);
        response.redirect("/");
});

router.post('/auth/logout', function(request, response) {
  request.logout();
  // After logging out, redirect the user somewhere useful.
  // Where they came from or the site root are good choices.
  response.redirect(request.get('Referer') || '/')
});
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
