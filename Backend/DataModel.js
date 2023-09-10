const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  Question: String,
  Option1: String,
  Option2: String,
  Option3: String,
  Option4: String,
  Solution: String,
});

const DataModel = mongoose.model("Data", dataSchema);

module.exports = DataModel;
