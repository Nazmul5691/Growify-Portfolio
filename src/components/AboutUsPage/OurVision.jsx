import { FaRegCheckSquare } from "react-icons/fa";

const OurVision = () => {
    return (
        <div className="px-5 py-10 lg:py-20 md:px-10 lg:px-20">
            <h1 className="text-3xl md:text-4xl text-center pb-4 lg:pb-8">Our Vision</h1>
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="w-full">
                    <p className="pb-10 md:pb-20 text-base md:text-lg">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks grove right at the coast of the Semantics, a large language ocean.
                    </p>
                    <div className="flex flex-col gap-4 md:gap-2">
                        <div className="flex gap-3">
                            <div className="text-blue-700 pt-[5px]">
                                <FaRegCheckSquare />
                            </div>
                            <div>
                                <p className="text-base md:text-lg">Separated they live in Bookmarksgrove</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className="text-blue-700 pt-[5px]">
                                <FaRegCheckSquare />
                            </div>
                            <div>
                                <p className="text-base md:text-lg">Right at the coast of</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className="text-blue-700 pt-[5px]">
                                <FaRegCheckSquare />
                            </div>
                            <div>
                                <p className="text-base md:text-lg">The Semantics</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className="text-blue-700 pt-[5px]">
                                <FaRegCheckSquare />
                            </div>
                            <div>
                                <p className="text-base md:text-lg">A large language ocean.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full pt-5 lg:pt-0">
                    <img src="https://i.ibb.co/d7hc1q0/info-2.png" alt="info-2" className="w-full h-auto" />
                </div>
            </div>
        </div>
    );
};

export default OurVision;







