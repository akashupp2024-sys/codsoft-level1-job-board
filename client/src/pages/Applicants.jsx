import { useEffect, useState } from "react";
import axios from "axios";

function Applicants() {

  const [applications, setApplications] = useState([]);

  useEffect(() => {

    axios.get(
      "https://job-board-backend-tm6e.onrender.com/api/applications"
    )
    .then(res => setApplications(res.data))
    .catch(err => console.log(err));

  }, []);

  return (

    <div className="min-h-screen bg-gray-100 py-16 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold mb-12">
          Applicants Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          {applications.map(app => (

            <div
              key={app._id}
              className="bg-white p-6 rounded-3xl shadow-lg"
            >

              <h2 className="text-2xl font-bold mb-3">
                {app.name}
              </h2>

              <p className="text-gray-600 mb-4">
                {app.email}
              </p>

              <a
                href={`https://job-board-backend-tm6e.onrender.com/uploads/${app.resume}`}
                target="_blank"
                rel="noreferrer"
                className="bg-green-600 text-white px-5 py-3 rounded-xl inline-block"
              >
                View Resume
              </a>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Applicants;