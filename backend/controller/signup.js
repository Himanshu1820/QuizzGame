const SignupModel = require("../models/signup");
class SignupController {
  create(data) {
    console.log(data);
    return new Promise((resolve, reject) => {
      try {
        const signup = new SignupModel({
          name: data.name,
          email: data.email,
          password: data.password,
        });
        signup
          .save()
          .then((success) => {
            resolve({
              msg: "Account created successfully",
              status: 1,
            });
          })
          .catch((error) => {
            reject({
              msg: "Unable to create account",
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
        let users = "";
        if (id) {
          users = await SignupModel.findById(id);
        } else {
          users = await SignupModel.find();
        }
        resolve({
          msg: "User found",
          status: 1,
          users,
        });
      } catch (error) {
        reject({
          msg: "Internal server error",
          status: 0,
          err: error.message,
        });
      }
    });
  }

  update(id, data) {
    return new Promise((resolve, reject) => {
      try {
        SignupModel.updateOne({ _id: id }, { password: data.password })
          .then((success) => {
            resolve({
              msg: "Password changed successfully",
              status: 1,
            });
          })
          .catch((error) => {
            reject({
              msg: "Unable to change the password",
              status: 0,
              err: error.message,
            });
          });
      } catch (err) {
        reject({
          msg: "Internal server error",
          status: 0,
          err: err.message,
        });
      }
    });
  }
}

module.exports = SignupController;
