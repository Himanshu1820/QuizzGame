const Router = require("express");
const QuesController = require("../Controller/Ques");

const QuesRouter = Router();

QuesRouter.get("/:id?", (req, res) => {
  const result = new QuesController().read(req.params.id);
  result
    .then((success) => {
      res.send(success);
    })
    .catch((error) => {
      console.log(error);
      res.send(error);
    });
});

QuesRouter.post("/create", (req, res) => {
  const result = new QuesController().create(req.body);
  result
    .then((success) => {
      res.send(success);
    })
    .catch((error) => {
      console.log(error);
      res.send(error);
    });
});

module.exports = QuesRouter;
