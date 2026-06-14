import { Link } from "react-router-dom";

function Navbar() {

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.reload();
  };

  return (

    <nav className="bg-white border-b sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        {/* LOGO */}

        <h1 className="text-4xl font-bold text-[#0b8f6a]">
          JobBoard
        </h1>

        

        {/* LINKS */}

        <div className="flex gap-10 items-center text-lg">

          <Link to="/">
            Home
          </Link>

          <Link to="/jobs">
            Find Jobs
          </Link>

          <Link to="/employer">
  Employer
</Link>

<Link to="/applicants">
  Applicants
</Link>

          <a href="#">
            Companies
          </a>

          <a href="#">
            Blog
          </a>

          {!user ? (

            <>
              <Link to="/login">
                Login
              </Link>

              <Link to="/register">
                Register
              </Link>
            </>

          ) : (

            <>
              <h2 className="font-semibold text-[#0b8f6a]">
                Hello, {user.name}
              </h2>

              <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Logout
              </button>
            </>

          )}

          <button
            className="bg-[#0b8f6a] hover:bg-[#08795a] text-white px-7 py-3 rounded-xl font-semibold"
          >
            Post a Job
          </button>

        </div>

      </div>

    </nav>

  );
}

export default Navbar;