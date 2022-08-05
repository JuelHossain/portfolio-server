const mongoose = require("mongoose");

const aboutSchema = mongoose.Schema({
  insName: String,
  title: String,
  grade: String,
  duration: String,
  web: String,
  text: String,
  cat: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

const About = mongoose.model("About", aboutSchema);

module.exports = About;
