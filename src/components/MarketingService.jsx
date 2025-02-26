

const MarketingService = () => {
    return (


        <div className="bg-[#F2F2F8] py-10 px-5 lg:py-20 lg:px-20">
            <div className="text-center">
                <h1 className="text-2xl lg:text-4xl font-bold">Popular Digital Marketing Services</h1>
                <h1 className="text-2xl lg:text-4xl font-bold lg:pt-2">To Build Your Business</h1>
                <p className="pt-4 text-sm lg:text-base">Our expert team specializes in delivering tailored solutions designed to elevate <br className="hidden lg:block" />
                    your brand and drive measurable results.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-10 justify-items-center">
                <div className="max-w-[300px] space-y-4 rounded-lg bg-[#CAC6FD] p-6 shadow-xl dark:bg-[#18181B]">
                    <h1 className="text-lg font-semibold px-5 text-center">Search Engine Optimization (SEO)</h1>
                    <div className="flex justify-center items-center">
                        <img width={400} height={400} className="h-[90px] w-[100px] rounded-lg object-cover" src="https://i.ibb.co/q5FTTHz/Marketing-Service1.jpg" alt="SEO Service" />
                    </div>
                    <p className="text-center text-gray-600 dark:text-white/60">Enhance your online visibility & drive organic traffic with our advanced SEO techniques. We optimize your website to rank higher.</p>
                </div>

                <div className="max-w-[300px] space-y-4 rounded-lg bg-slate-300 p-6 shadow-xl dark:bg-[#18181B]">
                    <h1 className="text-lg font-semibold px-5 text-center">Pay-Per-Click (PPC) Advertising</h1>
                    <div className="flex justify-center items-center">
                        <img width={400} height={400} className="h-[90px] w-[100px] rounded-lg object-cover" src="https://i.ibb.co/pK7Dn8s/Marketing-Service2.jpg" alt="PPC Service" />
                    </div>
                    <p className="text-center text-gray-600 dark:text-white/60">Reach your audience instantly and drive qualified leads with targeted PPC campaigns. Our experts craft compelling ad copy and optimize.</p>
                </div>

                <div className="max-w-[300px] space-y-4 rounded-lg bg-[#FEBFDA] p-6 shadow-xl dark:bg-[#18181B]">
                    <h1 className="text-lg font-semibold px-5 text-center">Social Media Marketing</h1>
                    <div className="flex justify-center items-center">
                        <img width={400} height={400} className="h-[90px] w-[100px] rounded-lg object-cover" src="https://i.ibb.co/r47f6GR/Marketing-Service3.jpg" alt="Social Media Marketing" />
                    </div>
                    <p className="text-center text-gray-600 dark:text-white/60">Build a strong brand presence and engage with your audience on social media platforms. We create strategic social media campaigns to boost brand.</p>
                </div>

                <div className="max-w-[300px] space-y-4 rounded-lg bg-[#FFE8A4] p-6 shadow-xl dark:bg-[#18181B]">
                    <h1 className="text-lg font-semibold px-5 text-center">Website Design and Development</h1>
                    <div className="flex justify-center items-center">
                        <img width={400} height={400} className="h-[90px] w-[100px] rounded-lg object-cover" src="https://i.ibb.co/0cRNr2v/Marketing-Service4.jpg" alt="Web Design Service" />
                    </div>
                    <p className="text-center text-gray-600 dark:text-white/60">Enhance your online visibility & drive organic traffic with our advanced SEO techniques. We optimize your website to rank higher.</p>
                </div>
            </div>
        </div>


    );
};

export default MarketingService;