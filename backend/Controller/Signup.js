const SignupModel = require("../Model/Signup");

class SignupController {
  create(data) {
    return new Promise((resolve, reject) => {
      try {
        const credentials = SignupModel({
          email: data.email,
          password: data.password,
        });

        credentials
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
        let user = null;
        if (id) {
          user = await SignupModel.findById(id);
        } else {
          user = await SignupModel.find();
        }
        resolve({
          msg: "User found",
          status: 1,
          user,
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

module.exports = SignupController;
