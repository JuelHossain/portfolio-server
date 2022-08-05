const mongoose = require("mongoose");

const skillsSchema = mongoose.Schema({
  title: String,
  about: String,
  tag: String,
  cat: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

const Skill = mongoose.model("Skill", skillsSchema);

module.exports = Skill;
