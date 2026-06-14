import { useState } from "react";
import axios from "axios";

function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
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
        "https://job-board-backend-tm6e.onrender.com/api/auth/login",
        formData
      );

      localStorage.setItem("token", res.data.token);

localStorage.setItem(
  "user",
  JSON.stringify(res.data.user)
);

      alert("Login Successful");

      console.log(res.data);

    } catch (error) {

      console.log(error);

      alert("Invalid Credentials");

    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md"
      >

        <h1 className="text-4xl font-bold mb-8 text-center">
          Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border px-5 py-3 rounded-xl mb-5 outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full border px-5 py-3 rounded-xl mb-6 outline-none"
        />

        <button
          className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700"
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;