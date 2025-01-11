const mongoose = require("mongoose");

const GeoSchema = mongoose.Schema(
  {
    image: {
      type: String,
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

const GeoModel = mongoose.model("geoguesser", GeoSchema);

module.exports = GeoModel;
