const router = require("express").Router();

// Import your authentication controller functions
// (Make sure these match your actual authController filename and method names)
const { 
  register, 
  login 
} = require("../controllers/authController");

// This handles: POST http://localhost:5000/api/auth/register
router.post("/register", register);

// This handles: POST http://localhost:5000/api/auth/login
router.post("/login", login);

module.exports = router;