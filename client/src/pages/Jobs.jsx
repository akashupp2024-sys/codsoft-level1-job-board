import { useEffect, useState } from "react";
import axios from "axios";

function Jobs() {

  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    axios.get("http://localhost:5000/api/jobs")
      .then(res => setJobs(res.data))
      .catch(err => console.log(err));

  }, []);

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="min-h-screen bg-gray-100 py-16 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <h1 className="text-5xl font-bold mb-6 text-center">
          Find Your Dream Job
        </h1>

        <p className="text-center text-gray-600 mb-10 text-lg">
          Explore top opportunities from leading companies
        </p>

        {/* Search */}

        <div className="flex justify-center mb-12">

          <input
            type="text"
            placeholder="Search jobs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-2xl px-6 py-4 rounded-2xl border shadow-sm focus:outline-none"
          />

        </div>

        {/* Jobs Grid */}

        <div className="grid md:grid-cols-3 gap-8">

          {filteredJobs.map(job => (

            <div
              key={job._id}
              className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* Top */}

              <div className="flex justify-between items-start mb-6">

                <img
  src={
    job.company === "Google"
      ? "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"

      : job.company === "Microsoft"
      ? "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"

      : job.company === "Amazon"
      ? "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"

      : job.company === "Netflix"
      ? "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"

      : job.company === "Adobe"
      ? "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg"

      : job.company === "Infosys"
      ? "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg"

      : job.company === "Uber"
      ? "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"

      : job.company === "OpenAI"
      ? "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg"

      : job.company === "IBM"
      ? "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"

      : job.company === "Apple"
      ? "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"

      : job.company === "Coinbase"
      ? "https://upload.wikimedia.org/wikipedia/commons/1/1a/Coinbase.svg"

      : job.company === "NVIDIA"
      ? "https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg"

      : job.company === "Rockstar Games"
      ? "https://upload.wikimedia.org/wikipedia/commons/a/a5/Rockstar_Games_Logo.svg"

      : "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg"
  }
  alt={job.company}
  className="w-14 h-14 object-contain rounded-xl bg-white p-2 border"
/>

                <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
                  {job.jobType}
                </span>

              </div>

              {/* Job Info */}

              <h2 className="text-2xl font-bold mb-2">
                {job.title}
              </h2>

              <p className="text-gray-600 mb-2">
                {job.company}
              </p>

              <p className="text-gray-500 mb-4">
                📍 {job.location}
              </p>

              <p className="text-green-600 font-semibold text-lg mb-5">
                {job.salary}
              </p>

              {/* Skills */}

              <div className="flex flex-wrap gap-2 mb-6">

                {job.skills?.map((skill, index) => (

                  <span
                    key={index}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>

                ))}

              </div>

              {/* Buttons */}

              <div className="flex gap-4">

                <a
                  href={`/apply/${job._id}`}
                  className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl font-medium"
                >
                  Apply Now
                </a>

                <button
                  className="border px-5 py-3 rounded-xl"
                >
                  Details
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Jobs;
