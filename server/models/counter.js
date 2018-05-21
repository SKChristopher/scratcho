const mongoose = require("mongoose");

const Schema = mongoose.Schema;

mongoose.connect("mongodb://chris:123@ds229690.mlab.com:29690/scratcho", err => {
  if (err) return console.error(err);
  console.log("Connected to mLabs remote.");
});

const counterSchema = new Schema({
  count: { type: Number }
});

const Counter = mongoose.model("Counter", counterSchema);
module.exports = Counter;
