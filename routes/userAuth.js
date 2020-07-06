const express = require("express");
const router = express.Router();
const db = require("../models");
const passport = require("../passport");

router.get("/test", function (req, res) {
  res.json(req.user);
});

router.post("/signup", function (req, res) {
  db.User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      console.log(err);
    } else if (user) {
      res.json({ msg: "This user already has an account!" });
    } else {
      db.User.create(req.body).then(function () {
        res.redirect(307, "/login");
      });
    }
  });
});

router.post("/login", passport.authenticate("local"), function (req, res) {
  console.log("login hit");
  res.json(req.user);
});

router.get("/logout", function (req, res) {
  console.log("logout!");
  req.logout();
  res.sendStatus(200)
});

// //protected routes
// router.get("/userlogged", function (req,res){
//   if(!req.user){
//   res.redirect("/login")
//   }else{
//   res.json(req.user);
//   }
//   })

module.exports = router;
