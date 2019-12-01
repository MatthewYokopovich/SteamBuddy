const express = require("express");
require("dotenv").config();
// const mongoose = require("mongoose");
const routes = require("./routes");
const session = require("express-session");
const util = require('util');
const SteamStrategy = require('passport-steam').Strategy;
const app = express();
const passport = require('passport');
const PORT = process.env.PORT || 3001;
// Define middleware here

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(session({
  secret: process.env.STEAM_KEY,
  name: 'name of session id',
  resave: true,
  saveUninitialized: true}));

passport.use(new SteamStrategy({
  returnURL: 'https://stark-wildwood-54419.herokuapp.com/auth/steam/return',
  realm: 'https://stark-wildwood-54419.herokuapp.com/',
  apiKey: process.env.STEAM_KEY,
},
function(identifier, profile, done) {
  // asynchronous verification, for effect...
  process.nextTick(function () {

    // To keep the example simple, the user's Steam profile is returned to
    // represent the logged-in user.  In a typical application, you would want
    // to associate the Steam account with a user record in your database,
    // and return that user instead.
    profile.identifier = identifier;
    return done(null, profile);
  });
}
));

passport.use(SteamStrategy);
passport.serializeUser(function(user, done) {
  done(null, user.identifier);
});
passport.deserializeUser(function(identifier, done) {
  // For this demo, we'll just return an object literal since our user
  // objects are this trivial.  In the real world, you'd probably fetch
  // your user object from your database here.
  done(null, {
      identifier: identifier,
      steamId: identifier.match(/\d+$/)[0]
  });
});
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//openid authentication routes


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/SteamBuddy");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
