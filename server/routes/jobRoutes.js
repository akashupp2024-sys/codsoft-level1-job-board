const router = require("express").Router();

const {
  getJobs,
  createJob,
  deleteJob
} = require("../controllers/jobController");

router.get("/", getJobs);

router.post("/", createJob);

router.delete("/:id", deleteJob);

module.exports = router;