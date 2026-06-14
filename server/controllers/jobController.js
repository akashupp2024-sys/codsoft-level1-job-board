const Job = require("../models/Job");

exports.getJobs = async (req, res) => {

  try {

    const jobs = await Job.find();

    res.json(jobs);

  } catch (error) {

    console.log(error);

  }
};

exports.createJob = async (req, res) => {

  try {

    const job = await Job.create(req.body);

    res.json(job);

  } catch (error) {

    console.log(error);

  }
};

exports.deleteJob = async (req, res) => {

  try {

    await Job.findByIdAndDelete(req.params.id);

    res.json({
      message: "Job Deleted"
    });

  } catch (error) {

    console.log(error);

  }
};