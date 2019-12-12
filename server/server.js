const http = require("http");
const mongoose = require("mongoose");

require("dotenv").config();
const app = require("./app");

let server = http.createServer(app);

mongoose
  .connect("mongodb://localhost/foodie" || process.env.MONGODB_URI, {
    useNewUrlParser: true
  })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

server
  .listen(process.env.PORT, () => {
    console.log(`Listening on http://localhost:${process.env.PORT}`);
  })
  .on("error", e => {
    console.log(1, e);
  });
