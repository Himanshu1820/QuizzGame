const Router = require("express");
const GeoController = require("../controller/geo");
const fileUpload = require("express-fileupload");
const GeoRouter = Router();

GeoRouter.post(
  "/create",
  fileUpload({
    createParentPath: true,
  }),
  (req, res) => {
    let image = null;
    if (req.files?.image) {
      image = req.files.image;
    }
    const result = new GeoController().create(req.body, image);
    result
      .then((success) => {
        res.send(success);
      })
      .catch((error) => {
        res.send(error);
        console.log(error);
      });
  }
);

GeoRouter.get("/:id?", (req, res) => {
  const result = new GeoController().read(req.params.id, req.query.type);
  result
    .then((success) => {
      res.send(success);
    })
    .catch((error) => {
      res.send(error);
      console.log(error);
    });
});

module.exports = GeoRouter;
