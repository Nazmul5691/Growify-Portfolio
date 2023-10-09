const Banner = () => {
  return (
    <div>
      <div
        className="hero h-[90vh]"
        style={{ backgroundImage: "url(https://i.ibb.co/3yB9X6X/3.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-[600px">
            <h2 className="mb-5 text-2xl font-bold text-[#ebb2d3]">
              Where Dreams Become Weddings
            </h2>
            <p>
              Turning Your Unique Vision Into Unforgettable Wedding
              Celebrations-
              <br />
              <span className="font-semibold">
                Where Dreams Truly Become Weddings.
              </span>
            </p>
            <div className="inline-flex mt-4">
              <div className="text-center">
                <input
                  type="text"
                  placeholder="Search here...."
                  className=" rounded-l py-2 px-4 outline-none"
                />
                <button className="bg-pink-500 text-white rounded-r py-2 px-4 hover:bg-blue-600">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
