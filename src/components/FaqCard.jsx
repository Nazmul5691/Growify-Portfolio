import { useState } from "react";

export default function FaqCard() {
    // add your array of object data
    const dataArr = [
        { 
            title: 'What services do you offer?', 
            description: 'We provide a wide range of services including SEO, PPC advertising, content marketing, social media management, and more.' 
        },
    
        { 
            title: 'How do I get started with your services?', 
            description: 'Getting started is easy! Simply contact us through our website, and our team will guide you through the process of selecting and customizing services to meet your needs.' 
        },
    
        { 
            title: 'What is your pricing structure?', 
            description: 'Our pricing is customized based on the scope and complexity of your project. We offer competitive rates tailored to provide the best value for your marketing goals.' 
        },
    
        { 
            title: 'What results can I expect?', 
            description: 'We focus on delivering measurable results, including increased traffic, better conversion rates, and improved ROI. Our strategies are designed to align with your business objectives.' 
        }
    ];

    
    // toggle state and function
    const [isOpen, setIsOpen] = useState(null);
    const handleToggle = (idx) => {
        setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
    };

    return (
        <div className="flex w-full justify-center">
            <div className=" max-w-[550px] cursor-pointer space-y-6">
                {/* mapping each accordion  */}
                {dataArr.map((data, idx) => (
                    <div key={idx} onClick={() => handleToggle(idx)} className="flex items-center">
                        {/* the index div  */}
                        <div className="flex size-16 px-3 select-none items-center justify-center rounded-md bg-zinc-700 text-2xl font-semibold text-white">
                            <span>0{idx + 1}</span>
                        </div>

                        <div className="relative h-[2px] w-10 bg-zinc-700">
                            <span className="absolute -left-2 -top-[5px] z-40 h-3 w-3 rounded-full border-2 border-zinc-700 bg-white"></span>
                            <span className="h-1 w-10 bg-zinc-700"></span>
                            <span
                                className={`absolute -right-2 -top-[5px] z-40 h-3 w-3 rounded-full border-2 ${isOpen === idx ? 'border-zinc-700 bg-white delay-100' : 'border-transparent'}`}
                            ></span>
                        </div>

                        {/* main accordion div  */}
                        <div className="text-center">
                            <div className="relative max-w-[450px] border-t-[12px] border-zinc-700 bg-sky-50 p-3 shadow-md">
                                <span className="absolute right-0 top-0 h-0 w-0 border-b-[40px] border-r-[40px] border-b-transparent border-r-zinc-700"></span>
                                <h1 className="select-none text-lg text-zinc-700">{data.title}</h1>
                            </div>
                            <div className={`grid overflow-hidden text-slate-600 transition-all duration-300 ease-in-out ${isOpen === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                <div className="overflow-hidden">
                                    <div className="max-w-[450px] bg-zinc-700 p-6 text-sm text-white">{data.description}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}