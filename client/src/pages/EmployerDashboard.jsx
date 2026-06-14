import { useEffect, useState } from "react";
import axios from "axios";

function EmployerDashboard() {

  const [jobs, setJobs] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    jobType: "",
    description: ""
  });

  const fetchJobs = async () => {

    const res = await axios.get(
      "https://job-board-backend-tm6e.onrender.com/api/jobs"
    );

    setJobs(res.data);
  };

  useEffect(() => {

    fetchJobs();

  }, []);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    await axios.post(
      "https://job-board-backend-tm6e.onrender.com/api/jobs",
      formData
    );

    alert("Job Posted");

    fetchJobs();
  };

  const deleteJob = async (id) => {

    await axios.delete(
      `https://job-board-backend-tm6e.onrender.com/api/jobs/${id}`
    );

    fetchJobs();
  };

  return (

    <div className="max-w-7xl mx-auto px-6 py-16">

      <h1 className="text-5xl font-bold mb-10">
        Employer Dashboard
      </h1>

      {/* FORM */}

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg mb-16 grid md:grid-cols-2 gap-6"
      >

        <input
          type="text"
          name="title"
          placeholder="Job Title"
          onChange={handleChange}
          className="border px-5 py-3 rounded-xl"
        />

        <input
          type="text"
          name="company"
          placeholder="Company"
          onChange={handleChange}
          className="border px-5 py-3 rounded-xl"
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={handleChange}
          className="border px-5 py-3 rounded-xl"
        />

        <input
          type="text"
          name="salary"
          placeholder="Salary"
          onChange={handleChange}
          className="border px-5 py-3 rounded-xl"
        />

        <input
          type="text"
          name="jobType"
          placeholder="Job Type"
          onChange={handleChange}
          className="border px-5 py-3 rounded-xl"
        />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="border px-5 py-3 rounded-xl md:col-span-2"
        />

        <button
          className="bg-green-600 text-white py-4 rounded-xl md:col-span-2"
        >
          Post Job
        </button>

      </form>

      {/* JOBS */}

      <div className="grid md:grid-cols-3 gap-8">

        {jobs.map(job => (

          <div
            key={job._id}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >

            <h2 className="text-2xl font-bold mb-3">
              {job.title}
            </h2>

            <p className="mb-2">
              {job.company}
            </p>

            <p className="mb-5 text-gray-500">
              {job.location}
            </p>

            <button
              onClick={() => deleteJob(job._id)}
              className="bg-red-500 text-white px-5 py-2 rounded-lg"
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default EmployerDashboard;