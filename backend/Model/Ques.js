const mongoose = require("mongoose");

const QuesSchema = mongoose.Schema(
  {
    ques: {
      type: String,
    },
    optA: {
      type: String,
    },
    optB: {
      type: String,
    },
    optC: {
      type: String,
    },
    optD: {
      type: String,
    },
    answer: {
      type: String,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const QuesModel = mongoose.model("question", QuesSchema);

module.exports = QuesModel;
