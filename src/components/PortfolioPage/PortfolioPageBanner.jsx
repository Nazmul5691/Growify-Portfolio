/* eslint-disable react/no-unescaped-entities */

const PortfolioPageBanner = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center pt-5 px-5 md:px-10 lg:px-20 lg:gap-10">
            <div className="w-full">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">OUR PROJECTS</h2>
                {/* <p className="w-full border-[1px] mt-2 border-blue-400"></p> */}
                <p className="pt-4 lg:pt-5 pb-5 lg:pb-10 text-base md:text-lg text-justify">
                    Our digital marketing agency helps over 200 companies to increase consumer loyalty and find new customers online. Here, you’ll find a selection of our expert work. Take a look at some of the results we’ve delivered.
                </p>
            </div>
            <div className="w-full">
                <img src="https://i.ibb.co/TgsThsc/portfolio-Banner.png" alt="portfolio-Banner" className="w-full" />
            </div>
        </div>
    );
};

export default PortfolioPageBanner;





