const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const authRouter = require("./routes/auth");
const offerRouter = require("./routes/offer");
const session = require("express-session");
const passport = require("passport");

require("./configs/passport");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());

app.use("/api", authRouter);
app.use("/api", offerRouter);

module.exports = app;
