import FaqCard from "./FaqCard";


const FAQ = () => {
    return (
        <div className="pt-[30px]  bg-gray-200 lg:py-[50px] px-5 md:px-10 lg:px-[80px] grid lg:grid-cols-2 lg:gap-0 gap-8">
            <div className="lg:w-[80%] w-full">
                <h3 className="text-sm lg:text-start text-center font-semibold text-blue-800">Sales & Marketing Inquiries</h3>
                <h1 className="text-2xl lg:text-start text-center lg:text-3xl font-bold text-gray-800 lg:mt-2 py-5">Service Information & Questions</h1>
                <p className="text-justify">Welcome to our FAQ section for Sales and Marketing Inquiries and Pre-Sales Support. Discover quick answers and expert assistance to learn about our marketing services, explore tailored strategies, and make informed decisions for your business. Our team at [Your Agency Name] is here to ensure you have all the information you need to elevate your brand and drive growth.</p>

            </div>

            <div className="w-full lg:pb-0 pb-10">
                <FaqCard></FaqCard>
            </div>
        </div>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;