function Home() {
  return (
    <div className="overflow-x-hidden">
      <section className="bg-[#d9f5e5] min-h-screen flex items-center py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-7xl font-bold leading-tight text-[#063b37] mb-6">
              The Smarter Way
              <br />
              to Find Your Next Job
            </h1>

            <p className="text-lg md:text-2xl text-[#0b4c47] mb-8">
              Explore thousands of curated roles from companies
              that care about their people.
            </p>

            {/* SEARCH BOX */}
            <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col gap-4 w-full">
              <input
                type="text"
                placeholder="Search jobs..."
                className="w-full border px-4 py-3 rounded-xl outline-none"
              />

              <select className="w-full border px-4 py-3 rounded-xl outline-none">
                <option>All Cities</option>
                <option>Delhi</option>
                <option>Bangalore</option>
                <option>Mumbai</option>
              </select>

              <button className="w-full bg-[#0b8f6a] hover:bg-[#08795a] text-white py-3 rounded-xl font-semibold">
                Search
              </button>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4 mt-10 text-center">
              <div>
                <h2 className="text-2xl md:text-5xl font-bold text-[#0b8f6a]">
                  12K+
                </h2>
                <p className="text-sm md:text-xl text-[#21514b]">
                  Open Roles
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-5xl font-bold text-[#0b8f6a]">
                  3K+
                </h2>
                <p className="text-sm md:text-xl text-[#21514b]">
                  Companies
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-5xl font-bold text-[#0b8f6a]">
                  8K+
                </h2>
                <p className="text-sm md:text-xl text-[#21514b]">
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
