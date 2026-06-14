const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const jobRoutes = require("./routes/jobRoutes");
const authRoutes = require("./routes/authRoutes");
const applicationRoutes = require("./routes/applicationRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/api/jobs", jobRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/applications", applicationRoutes);

app.use("/uploads", express.static("uploads"));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});