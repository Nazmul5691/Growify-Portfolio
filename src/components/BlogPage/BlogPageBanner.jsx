/* eslint-disable react/no-unescaped-entities */

const BlogPageBanner = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center pt-5 px-5 md:px-10 lg:px-20 lg:gap-10">
            <div className="w-full md:w-1/2">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-left">OUR BLOG</h2>
                {/* <p className=" w-full border-[1px] mt-2 border-blue-400"></p> */}
                <p className="pt-5 pb-10 text-base md:text-lg text-justify">
                    Every week we share our expertise on effective strategies and techniques to help you reach customers and prospects across the entire web.
                </p>
            </div>
            <div className="w-full md:w-1/2">
                <img src="https://i.ibb.co/LQ4mbHT/blog-Banner.png" alt="about-Us-Banner" className="w-full" />
            </div>
        </div>
    );
};

export default BlogPageBanner;











