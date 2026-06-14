const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({

  title: String,

  company: String,

  logo: String,

  location: String,

  salary: String,

  jobType: String,

  skills: [String],

  description: String

});

module.exports = mongoose.model("Job", JobSchema);