const GeoModel = require("../models/geo");
const QuizzModel = require("../models/quizz");
const { writeFileSync } = require("fs");
class GeoController {
  create(data, image) {
    return new Promise((resolve, reject) => {
      try {
        if (data.type === "Geo") {
          const ImageName =
            new Date().getTime() +
            Math.floor(Math.random() * 1000) +
            image.name;
          const dest = "./public/images/" + ImageName;
          image.mv(dest, (err) => {
            if (!err) {
              const GeoPoints = new GeoModel({
                image: ImageName,
                optA: data.optA,
                optB: data.optB,
                optC: data.optC,
                optD: data.optD,
                correctOpt: data.answer,
              });

              GeoPoints.save()
                .then((success) => {
                  resolve({
                    msg: "image question uploaded",
                    status: 1,
                  });
                })
                .catch((error) => {
                  reject({
                    msg: "unable to upload image question",
                    status: 0,
                    err: error.message,
                  });
                });
            }
          });
        } else if (data.type === "Quizz") {
          const questions = new QuizzModel({
            question: data.ques,
            optA: data.optA,
            optB: data.optB,
            optC: data.optC,
            optD: data.optD,
            correctOpt: data.answer,
          });

          questions
            .save()
            .then((success) => {
              resolve({
                msg: "Question added successfully",
                status: 1,
              });
            })
            .catch((Error) => {
              reject({
                msg: "Unable to add question",
                status: 0,
                err: Error.message,
              });
            });
        }
      } catch (error) {
        reject({
          msg: "Internal server error",
          status: 0,
        });
      }
    });
  }
  read(id, type) {
    return new Promise(async (resolve, reject) => {
      try {
        let questions = "";
        if (type == "Geo") {
          if (id) {
            questions = await GeoModel.findById(id);
          } else {
            questions = await GeoModel.find();
          }
        } else if (type == "Quizz") {
          if (id) {
            questions = await QuizzModel.findById(id);
          } else {
            questions = await QuizzModel.find();
          }
        }

        console.log(questions);
        resolve({
          msg: "Data found",
          status: 1,
          questions,
          imgBaseUrl: "/images/",
        });
      } catch (error) {
        reject({
          msg: "Internal server error",
          status: 0,
        });
      }
    });
  }
  update_status(id, new_status) {
    return new Promise((resolve, reject) => {
      try {
      } catch (error) {
        reject({
          msg: "Internal server error",
          status: 0,
        });
      }
    });
  }
  update(id, data) {
    return new Promise((resolve, reject) => {
      try {
      } catch (error) {
        reject({
          msg: "Internal server error",
          status: 0,
        });
      }
    });
  }
  delete(id) {
    return new Promise((resolve, reject) => {
      try {
      } catch (error) {
        reject({
          msg: "Internal server error",
          status: 0,
        });
      }
    });
  }
}

module.exports = GeoController;
