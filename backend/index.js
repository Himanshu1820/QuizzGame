const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const QuesRouter = require("./Router/Ques");
const SignupRouter = require("./Router/Signup");
require("dotenv").config();
const port = process.env.PORT || 5000;
const mongo_uri =
  process.env.MONGO_URI ||
  "mongodb+srv://himan1820:himantechcode1820@cluster0.qrgkn.mongodb.net/quizzgame?retryWrites=true&w=majority&appName=Cluster0";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/ques", QuesRouter);
app.use("/signup", SignupRouter);
app.use("/login", SignupRouter);

mongoose
  .connect(mongo_uri)
  .then((success) => {
    console.log("Database connected");

    app.listen(port, () => {
      console.log("The app is listening on port " + port);
    });
  })
  .catch((error) => {
    console.log("unable to connect to database");
  });
