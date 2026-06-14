import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Added for automatic redirection

function Register() {
  const navigate = useNavigate(); // Initialize navigation
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "candidate"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      alert("Registration Successful ✅");
      console.log("Server Response:", res.data);
      
      // Clear form inputs on success
      setFormData({ name: "", email: "", password: "", role: "candidate" });
      
      // Redirect to your login page
      navigate("/login"); 

    } catch (error) {
      // Improved error debugging to reveal exact backend issues
      console.error("Registration Error Details:", error.response?.data || error.message);
      alert(`Registration Failed: ${error.response?.data?.message || "Check your backend server connection."}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">Register</h1>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name} // Explicitly binding the value
          onChange={handleChange}
          className="w-full border px-5 py-3 rounded-xl mb-5 outline-none"
          required // Prevents blank submissions
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email} // Explicitly binding the value
          onChange={handleChange}
          className="w-full border px-5 py-3 rounded-xl mb-5 outline-none"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password} // Explicitly binding the value
          onChange={handleChange}
          className="w-full border px-5 py-3 rounded-xl mb-5 outline-none"
          required
        />

        <select
          name="role"
          value={formData.role} // Explicitly binding the value
          onChange={handleChange}
          className="w-full border px-5 py-3 rounded-xl mb-6 outline-none"
        >
          <option value="candidate">Candidate</option>
          <option value="employer">Employer</option>
        </select>

        <button
          type="submit" // Force button to trigger form onSubmit explicitly
          className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 font-semibold transition-colors"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;