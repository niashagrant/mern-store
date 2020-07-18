const db = require("../models");
const LocalStrategy = require("passport-local").Strategy;

const strategy = new LocalStrategy(
  {
    usernameField: "email", // not necessary, DEFAULT
  },
  function (email, password, done) {
    // console.log(email);
    // console.log(password);
    db.User.findOne({ email: email }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        console.log("incorrect username");
        return done(null, false, { message: "Incorrect username" });
      }
      if (!user.checkPassword(password)) {
        console.log("incorrect password");
        return done(null, false, { message: "Incorrect password" });
      }
      // console.log("Who knows?");
      return done(null, user);
    });
  }
);
module.exports = strategy;
