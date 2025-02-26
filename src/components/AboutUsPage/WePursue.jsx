import WeParseCard from "./WeParseCard";

const WePursue = () => {
    return (
        <div className="bg-white py-10 lg:py-20 px-5 md:px-10 lg:px-20">
            <div className="flex items-center justify-center h-full">
                <h1 className="text-xl md:text-2xl text-center w-full md:w-[80%] lg:w-[60%]">
                    We pursue relationships based on transparency, persistence, mutual trust, and integrity with our employees, customers, and other business partners.
                </h1>
            </div>

            <div className="lg:mt-8">
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-8  py-4 lg:py-8">
                    <div className="w-full text-justify">
                        <p>Our team of specialists consistently delivers outstanding results combining creative ideas with our vast experience. We can help you build a sustainable, meaningful relationship with your clients by engaging them with your brand using social media.</p>
                    </div>
                    <div className="w-full text-justify">
                        <p>We work in areas as diverse as search engine optimization, social media marketing, email marketing and digital marketing.</p>
                    </div>
                </div>
                <div>
                    <WeParseCard />
                </div>
            </div>
        </div>
    );
};

export default WePursue;








