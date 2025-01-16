const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const GeoRouter = require("./routers/geo");
const SignupRouter = require("./routers/signup");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/ques", GeoRouter);
app.use("/signup", SignupRouter);
app.use("/forgot", SignupRouter);
app.use(express.static("public"));
require("dotenv").config();
const port = process.env.PORT;
const DB = process.env.MONGO_URI;

mongoose
  .connect(DB, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then((success) => {
    console.log("Connected to database successfully");

    app.listen(port, () => {
      console.log("The app is listening on port " + port);
    });
  })
  .catch((error) => {
    console.log("Unable to connect to database");
    console.log(error.message);
  });
