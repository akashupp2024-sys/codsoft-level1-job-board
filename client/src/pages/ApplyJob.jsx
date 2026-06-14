import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ApplyJob() {

  const { id } = useParams();

  const [formData, setFormData] = useState({

    name: "",
    email: "",
    resume: null

  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleFileChange = (e) => {

    setFormData({
      ...formData,
      resume: e.target.files[0]
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const data = new FormData();

    data.append("name", formData.name);

    data.append("email", formData.email);

    data.append("resume", formData.resume);

    data.append("jobId", id);

    try {

      await axios.post(
        "http://localhost:5000/api/applications/apply",
        data
      );

      alert("Application Submitted");

    } catch (error) {

      console.log(error);

    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-lg"
      >

        <h1 className="text-4xl font-bold mb-8 text-center">
          Apply Job
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          className="w-full border px-5 py-3 rounded-xl mb-5"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={handleChange}
          className="w-full border px-5 py-3 rounded-xl mb-5"
        />

        <input
          type="file"
          onChange={handleFileChange}
          className="w-full border px-5 py-3 rounded-xl mb-6"
        />

        <button
          className="w-full bg-green-600 text-white py-3 rounded-xl"
        >
          Submit Application
        </button>

      </form>

    </div>
  );
}

export default ApplyJob;