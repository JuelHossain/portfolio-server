const mongoose = require("mongoose");

const adminStatusSchema = mongoose.Schema({
  admin: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const AdminStatus = mongoose.model("AdminStatus", adminStatusSchema);

module.exports = AdminStatus;
