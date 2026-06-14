const Application = require("../models/Application");

exports.applyJob = async (req, res) => {

  try {

    const application = await Application.create({

      name: req.body.name,

      email: req.body.email,

      jobId: req.body.jobId,

      resume: req.file.filename

    });

    res.json(application);

  } catch (error) {

    console.log(error);

  }
};

exports.getApplications = async (req, res) => {

  try {

    const applications = await Application.find();

    res.json(applications);

  } catch (error) {

    console.log(error);

  }
};