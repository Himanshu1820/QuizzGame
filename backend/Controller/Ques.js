const QuesModel = require("../Model/Ques");

class QuesController {
  create(data) {
    return new Promise((resolve, reject) => {
      try {
        const ques = QuesModel({
          ques: data.ques,
          optA: data.optA,
          optB: data.optB,
          optC: data.optC,
          optD: data.optD,
          answer: data.ans,
        });
        ques
          .save()
          .then((success) => {
            resolve({
              msg: "Question added successfully",
              status: 1,
            });
          })
          .catch((error) => {
            reject({
              msg: "Unable to add question",
              status: 0,
              err: error.message,
            });
          });
      } catch (error) {
        reject({
          msg: "Internal server error",
          status: 0,
        });
      }
    });
  }
  read(id) {
    return new Promise(async (resolve, reject) => {
      try {
        let questions = "";
        if (id) {
          questions = await QuesModel.findById(id);
        } else {
          questions = await QuesModel.find();
        }
        resolve({
          msg: "Data found",
          status: 1,
          questions,
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

module.exports = QuesController;
