import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Flight = new Schema({
  airline: {
    type: String,
    enum: ["American", "Southwest", "United"],
  },
  airport: {
    type: String,
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
    default: "DEN",
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
  },
  departs: {
    type: Date,
    default: function () {
      return Date.now() + 1000 * 60 * 60 * 24 * 365;
    },
  },
});
