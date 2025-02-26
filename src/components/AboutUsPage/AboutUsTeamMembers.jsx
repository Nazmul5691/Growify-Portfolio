

const AboutUsTeamMembers = () => {
    return (
        <div>
            <div className="px-5 py-10 md:px-10 lg:px-20">
                <div>
                    <div className="text-center items-center">
                        <h2 className="text-lg">Our Team Members</h2>
                        <div className="w-[80%] lg:w-[35%] mx-auto">
                            <h1 className="text-2xl lg:text-4xl font-bold pt-4 pb-8">We Bring a Core Team Of Experts World</h1>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
                        <div className="w-full space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px] dark:bg-[#18181B]">
                            <img width={400} height={400} className="rounded-lg object-cover" src="https://i.ibb.co/88h3w68/team-1-1.jpg" alt="card navigate ui" />
                            <div className="flex flex-col items-center justify-center">
                                <h1 className="text-lg font-semibold">Leslie Alexander</h1>
                                <p className="text-sm text-gray-500 dark:text-white/60">Web Designer</p>
                            </div>
                        </div>
                        <div className="w-full space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px] dark:bg-[#18181B]">
                            <img width={400} height={400} className="rounded-lg object-cover" src="https://i.ibb.co/qkbL12t/team-1-2.jpg" alt="card navigate ui" />
                            <div className="flex flex-col items-center justify-center">
                                <h1 className="text-lg font-semibold">Theresa Webb</h1>
                                <p className="text-sm text-gray-500 dark:text-white/60">Sr. Marketer</p>
                            </div>
                        </div>
                        <div className="w-full space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px] dark:bg-[#18181B]">
                            <img width={400} height={400} className="rounded-lg object-cover" src="https://i.ibb.co/y8FLsvQ/team-1-3.jpg" alt="card navigate ui" />
                            <div className="flex flex-col items-center justify-center">
                                <h1 className="text-lg font-semibold">Dianne Russell</h1>
                                <p className="text-sm text-gray-500 dark:text-white/60">Area Manager</p>
                            </div>
                        </div>
                        <div className="w-full space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px] dark:bg-[#18181B]">
                            <img width={400} height={400} className="rounded-lg object-cover" src="https://i.ibb.co/qkbL12t/team-1-2.jpg" alt="card navigate ui" />
                            <div className="flex flex-col items-center justify-center">
                                <h1 className="text-lg font-semibold">Dianne Russell</h1>
                                <p className="text-sm text-gray-500 dark:text-white/60">Area Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutUsTeamMembers;