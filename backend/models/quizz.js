const mongoose = require("mongoose");

const QuizzSchema = mongoose.Schema(
  {
    question: {
      type: String,
      trim: true,
    },
    optA: {
      type: String,
      trim: true,
    },
    optB: {
      type: String,
      trim: true,
    },
    optC: {
      type: String,
      trim: true,
    },
    optD: {
      type: String,
      trim: true,
    },
    correctOpt: {
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

const QuizzModel = mongoose.model("quizz", QuizzSchema);

module.exports = QuizzModel;
