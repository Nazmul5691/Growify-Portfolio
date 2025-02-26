/* eslint-disable react/no-unescaped-entities */


const TailoredSolutions = () => {
    return (


        <div className="bg-[#F2F2F8] pb-10 px-5 lg:px-20">
            <div className="text-center">
                <h1 className="text-2xl lg:text-4xl font-bold">Tailored Solutions, Proven Results</h1>
                <h1 className="text-2xl lg:text-4xl font-bold lg:pt-2">And Exceptional Service</h1>
                <p className="pt-4 text-sm lg:text-base">
                    We pride ourselves on delivering a value proposition that goes beyond expectations. <br className="hidden lg:block" />
                    Our approach is centered on understanding your business inside
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between bg-[#F0F2F5] py-10 gap-6">
                {/* Left Section */}
                <div className="relative w-full lg:w-2/3 rounded-lg overflow-hidden shadow-lg">
                    <img
                        src="https://i.ibb.co/LgsXfV1/service-img1.png"
                        alt="Value Proposition"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end px-6 py-8 lg:px-10 lg:py-16 text-white">
                        <h3 className="text-xs lg:text-sm py-2 lg:py-4">Our Value</h3>
                        <h2 className="text-lg lg:text-3xl font-bold pb-2 lg:pb-3 text-white">
                            Explore Our Unique Value Proposition & How We Drive Business Growth
                        </h2>
                        <p className="text-xs lg:text-base">
                            We're committed to delivering exceptional value to our clients. We understand that every business is unique, with a personalized approach to every project we undertake.
                        </p>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex flex-col gap-5 lg:gap-20 w-full lg:w-1/3">
                    {/* Mission Card */}
                    <div className="bg-[#C8BFF4] px-4 lg:px-6 py-5 lg:py-7 rounded-lg shadow-lg">
                        <h3 className="text-blue-700 text-sm lg:text-base">Our Mission</h3>
                        <h1 className="py-2 lg:py-3 font-semibold text-sm lg:text-base">
                            We strive to be more than just a service provider; we aim to be trusted SEOC.
                        </h1>
                        <p className="text-justify text-xs lg:text-sm">
                            By staying true to our mission and values, we are committed to helping businesses of all sizes achieve their goals and realize their potential.
                        </p>
                        <button className="mt-4 bg-[#604ffd] text-white px-2 py-1 rounded-sm flex items-center text-xs lg:text-sm">
                            Explore More <span className="ml-2">➔</span>
                        </button>
                    </div>

                    {/* Vision Card */}
                    <div className="bg-[#FEBFDA] px-4 lg:px-6 py-5 lg:py-7 rounded-lg shadow-lg">
                        <h3 className="text-pink-700 text-sm lg:text-base">Our Vision</h3>
                        <h1 className="py-2 lg:py-3 font-semibold text-sm lg:text-base">
                            We aspire to create a world where every business owner feels empowered
                        </h1>
                        <p className="text-justify text-xs lg:text-sm">
                            By staying true to our vision and values, we are committed to driving positive change and shaping a brighter future for businesses and communities.
                        </p>
                        <button className="mt-4 bg-[#604ffd] text-white px-2 py-1 rounded-sm flex items-center text-xs lg:text-sm">
                            Explore More <span className="ml-2">➔</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default TailoredSolutions;