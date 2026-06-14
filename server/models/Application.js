const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({

  name: String,

  email: String,

  resume: String,

  jobId: String,

  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model(
  "Application",
  ApplicationSchema
);