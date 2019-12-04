const path = require("path");
const router = require("express").Router();
const passport = require('passport');
const apiRoutes = require("./api");
const axios = require("axios");

// API Routes

router.post('/auth/steam',
  passport.authenticate('steam', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/');
  });

router.get('/auth/steam/return',  
passport.authenticate('steam'),
    function(request, response) {
      console.log(request.user.steamId);
      axios.post("/api/user/find", {
        steamId: request.user.steamId
      }).then(resp=>{
        console.log(resp.steamId +"test1");
        if(!resp.steamId){
          axios.put("/api/user/create", {
            steamId: request.user.steamId,
            favorites: []
          }).then(respo=>{
            console.log(respo+"test2");
            response.redirect("/");
          })
        }
        else{
          response.redirect("/");
        }
      })
});

router.post('/auth/logout', function(request, response) {
  request.logout();
  console.log("logout");
  // After logging out, redirect the user somewhere useful.
  // Where they came from or the site root are good choices.
  response.redirect(request.get('/'));
});

router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});



module.exports = router;
