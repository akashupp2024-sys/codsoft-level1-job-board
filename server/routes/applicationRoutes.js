const router = require("express").Router();

const upload = require("../middleware/upload");

const {
  applyJob,
  getApplications
} = require("../controllers/applicationController");

router.post(
  "/apply",
  upload.single("resume"),
  applyJob
);

router.get("/", getApplications);

module.exports = router;