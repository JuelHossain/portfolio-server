const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  password: {
    type: String,
    required: true,
  },
  secret: {
    type: Number,
    required: true,
  },
  admin: {
    type: Boolean,
    default: false,
  },
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
