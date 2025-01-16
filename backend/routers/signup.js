const Router = require("express");
const SignupController = require("../controller/signup");

const SignupRouter = Router();

SignupRouter.post("/create", (req, res) => {
  const result = new SignupController().create(req.body);
  result
    .then((success) => {
      res.send(success);
    })
    .catch((error) => {
      res.send(error);
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
    });
});

SignupRouter.put("/change-pass/:id", (req, res) => {
  const result = new SignupController().update(req.params.id, req.body);
  result
    .then((success) => {
      res.send(success);
    })
    .catch((error) => {
      res.send(error);
    });
});

module.exports = SignupRouter;
