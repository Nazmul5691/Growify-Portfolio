/* eslint-disable react/no-unescaped-entities */

const AboutUsBanner = () => {
    return (
        <div className="lg:flex flex-col md:flex-row items-center justify-center pt-5 px-5 md:px-10 lg:px-20 lg:gap-10">
            <div className="w-full md:w-full">
                <h1 className="text-3xl md:text-4xl lg:text-5xl pb-4 text-blue-700 text-center md:text-left">Growify</h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-left">A full service digital marketing agency</h2>
                {/* <p className=" w-full border-[1px] mt-2 border-blue-400"></p> */}
                <p className="pt-5 pb-5 lg:pb-10 text-base md:text-lg text-justify">
                    Our team at Growify creates impactful content strategies tailored for forward-thinking companies. We have a proven history of boosting search engine rankings effectively.
                </p>
                <p className="text-base md:text-lg text-justify">
                    At Growify, we believe in crafting compelling narratives that flow seamlessly, bringing life to your brand's story. In a world where words can often feel disconnected, our approach ensures that every piece of content we create is purposeful and impactful, guiding your audience effortlessly to engage with your message.
                </p>
            </div>
            <div className="w-full md:pt-8 md:w-[70%] items-center justify-center mx-auto">
                <img src="https://i.ibb.co/nmFvTct/about-Us-Banner.png" alt="about-Us-Banner" className="w-full" />
            </div>
        </div>
    );
};

export default AboutUsBanner;






