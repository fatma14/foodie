const express = require("express");
const router = express.Router();
const passport = require("passport");
const userService = require("../services/user");

router.post("/signup", (req, res) => {
  const { username, password, address } = req.body;

  if (!username) {
    return res.status(400).json({ message: "Username can't be empty" });
  }
  if (!password || password.length < 8) {
    return res.status(400).json({ message: "Password is too short" });
  }

  userService
    .signup(username, password, address)
    .then(newUser => {
      req.login(newUser, err => {
        if (err) res.status(500).json(err);
        else res.json(newUser);
      });
    })
    .catch(error => {
      if (error.message === "USERNAME_ALREADY_EXIST") {
        res.status(400).json({ message: "Username is already taken" });
      } else {
        res.status(500).json(error);
      }
    });
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user) => {
    if (err) {
      return res.status(500).json({ message: "Error while authenticating" });
    }
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    req.login(user, err => {
      if (err) res.status(500).json(err);
      res.json(user);
    });
  })(req, res, next);
});

router.delete("/logout", (req, res) => {
  req.logout();
  res.json({ message: "Successful logout" });
});

module.exports = router;
