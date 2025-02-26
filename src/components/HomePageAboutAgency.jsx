const HomePageAboutAgency = () => {
    return (
        <div className="px-5 md:px-10 lg:px-20 py-10 lg:py-20 lg:flex lg:gap-20 gap-5">


            <div className="w-full relative flex justify-center">
                <div className="relative md:w-[100%] lg:w-[90%]">
                    <img src="https://i.ibb.co/Dg1LvqT/about-one-img-1-modified.png" alt="about-one-img-1" className="mx-auto" />
                </div>
                <div className="absolute md:pr-5 lg:pr-0 pr-5 md:mt-[430px] mt-[280px] lg:mt-[340px] md:pl-[120px] lg:pl-0 pl-[68px] lg:ml-[200px]">
                    <img className="w-[80%] lg:w-[100%]" src="https://i.ibb.co/xYbqwtB/about-one-img-2.jpg" alt="" />
                </div>
            </div>

            <div className="w-full lg:pt-0 md:pt-24 pt-20">
                <h3 className="text-lg lg:text-start text-center text-blue-800 font-semibold">About agency:</h3>
                <div className="py-3">
                    <h1 className="text-2xl lg:text-start text-center lg:text-4xl font-bold">We’re sharp brands creators open for any new collabs</h1>
                </div>
                <p className="text-gray-600 text-justify">Grow brands through bold and strategic creative, focused on searching new ways to showcase user content on digital support and envisioning the future arts.</p>

                <div className="flex  pt-5 gap-4">
                    <div className=" w-full lg:w-[70%]">
                        <h3 className="text-xl font-semibold">High Standard</h3>
                        <p className="py-4 text-justify text-gray-600">Grow brands through bold and strategic creative, focused on searching new ways to showcase user content on digital support and envisioning the future arts.</p>
                        {/* Button visible on large devices */}
                        <button className="bg-[#604ffd] hidden lg:flex text-white px-2 py-1 rounded-sm items-center mx-auto lg:mx-0 lg:mt-[30px]">
                            Explore More <span className="ml-2">➔</span>
                        </button>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/SvCxFrq/about-one-standard-img.jpg" alt="about-one-standard-img" />
                    </div>
                </div>
            </div>
            {/* Button visible on small devices */}
            <button className="bg-[#604ffd] lg:hidden text-white px-2 py-1 rounded-sm flex items-center mx-auto lg:mx-0 lg:mt-[30px] mt-5">
                Explore More <span className="ml-2">➔</span>
            </button>
        </div>
    );
};

export default HomePageAboutAgency;







