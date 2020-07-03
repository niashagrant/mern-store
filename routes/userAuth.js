const express = require("express");
const router = express.Router();
const db = require("../models");
const passport = require("../passport");

router.post("/signup", function (req, res) {
  db.User.findOne({ email: email }, (err, user) => {
    if (err) {
      console.log(err);
    } else if (user) {
      res.json({ msg: "This user already has an account!" });
    } else {
      db.User.create({ email: req.body.email, password: req.body.password });
    }
  });
});

router.post("/login", function (req, res) {});

router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

module.exports = router;
