function Home() {

  return (

    <div>

      {/* HERO SECTION */}

      <section className="bg-[#d9f5e5] min-h-screen flex items-center">

        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}

          <div>

            <h1 className="text-6xl md:text-7xl font-bold leading-tight text-[#063b37] mb-8">

              The Smarter Way
              <br />
              to Find Your Next Job

            </h1>

            <p className="text-2xl text-[#0b4c47] mb-10">

              Explore thousands of curated roles from companies
              that care about their people.

            </p>

            {/* SEARCH BOX */}

            <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col md:flex-row gap-4 items-center max-w-3xl">

              <input
                type="text"
                placeholder="Search jobs..."
                className="flex-1 border px-5 py-4 rounded-xl outline-none text-lg"
              />

              <select
                className="border px-5 py-4 rounded-xl outline-none text-lg"
              >

                <option>
                  All Cities
                </option>

                <option>
                  Delhi
                </option>

                <option>
                  Bangalore
                </option>

                <option>
                  Mumbai
                </option>

              </select>

              <button
                className="bg-[#0b8f6a] hover:bg-[#08795a] text-white px-10 py-4 rounded-xl text-lg font-semibold"
              >
                Search
              </button>

            </div>

            {/* STATS */}

            <div className="flex gap-16 mt-14">

              <div>

                <h2 className="text-5xl font-bold text-[#0b8f6a]">
                  12K+
                </h2>

                <p className="text-xl text-[#21514b]">
                  Open Roles
                </p>

              </div>

              <div>

                <h2 className="text-5xl font-bold text-[#0b8f6a]">
                  3K+
                </h2>

                <p className="text-xl text-[#21514b]">
                  Companies
                </p>

              </div>

              <div>

                <h2 className="text-5xl font-bold text-[#0b8f6a]">
                  8K+
                </h2>

                <p className="text-xl text-[#21514b]">
                  Hired This Month
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT IMAGE */}

          <div className="hidden md:flex justify-center">

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="team"
              className="rounded-[40px] shadow-2xl w-full max-w-xl"
            />

          </div>

        </div>

      </section>

    </div>

  );
}

export default Home;
