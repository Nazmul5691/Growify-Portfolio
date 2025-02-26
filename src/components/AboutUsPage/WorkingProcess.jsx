import { IoMdDocument, IoMdBulb, IoMdOptions, IoMdStats } from "react-icons/io";

const WorkingProcess = () => {
    const services = [
        {
            icon: <IoMdDocument size={40} />,
            title: 'Planning',
        },
        {
            icon: <IoMdBulb size={40} />,
            title: 'Research',
        },
        {
            icon: <IoMdOptions size={40} />,
            title: 'Optimizing',
        },
        {
            icon: <IoMdStats size={40} />,
            title: 'Results',
        },
    ];

    return (
        <div className="bg-[#0C5ADB] py-10 lg:py-20">
            <h2 className="text-center text-lg md:text-xl lg:text-xl text-white">Work Flow</h2>
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl text-white pt-4 pb-10">Our Working Process</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8 justify-items-center px-5 md:px-20 lg:px-40">
                {services.map((service, index) => (
                    <div key={index} className="flex flex-col items-center space-y-4">
                        <div className="bg-[#1040D2] p-8 rounded-full flex items-center justify-center">
                            <span className="text-blue-200">
                                {service.icon}
                            </span>
                        </div>
                        <p className="text-white text-lg">{service.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkingProcess;





