const Router = require("express");
const SignupController = require("../Controller/Signup");

const SignupRouter = Router();

SignupRouter.post("/create", (req, res) => {
  const result = new SignupController().create(req.body);
  result
    .then((success) => {
      res.send(success);
    })
    .catch((error) => {
      res.send(error);
      console.log(error);
    });
});

SignupRouter.get("/:id?", (req, res) => {
  const result = new SignupController().read(req.params.id);
  result
    .then((success) => {
      res.send(success);
    })
    .catch((error) => {
      res.send(error);
      console.log(error);
    });
});

module.exports = SignupRouter;
