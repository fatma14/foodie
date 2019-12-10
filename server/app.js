const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const authRouter = require("./routes/auth");
const offerRouter = require("./routes/offer");
const uploadFileRouter = require("./routes/file-upload");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");

require("./configs/passport");

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4000"]
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", authRouter);
app.use("/api", offerRouter);
app.use("/api", uploadFileRouter);

module.exports = app;
