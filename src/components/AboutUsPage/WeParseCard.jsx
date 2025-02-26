import { IoMdTime, IoMdAnalytics, IoMdMail, IoMdSearch, IoMdPeople, IoMdTrophy } from "react-icons/io";

const WeParseCard = () => {

    const cardData = [
        {
            icon: <IoMdTime />,
            digit: 10,
            title: 'Years in Marketing',
            color: '#CAC6FD',
        },
        {
            icon: <IoMdAnalytics />,
            digit: 450,
            title: 'Analytic Reports',
            color: '#FFD700',
        },
        {
            icon: <IoMdMail />,
            digit: 800,
            title: 'Email Campaigns',
            color: '#90EE90',
        },
        {
            icon: <IoMdSearch />,
            digit: 300,
            title: 'SEO Campaigns',
            color: '#FFB6C1',
        },
        {
            icon: <IoMdPeople />,
            digit: 20,
            title: 'Team Members',
            color: '#87CEEB',
        },
        {
            icon: <IoMdTrophy />,
            digit: 50,
            title: 'First Positions',
            color: '#FF6347',
        },
    ]

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 pt-2 justify-items-center">
                {cardData.map((card, index) => (
                    <div 
                        key={index} 
                        className={`max-w-[300px] space-y-4 rounded-lg p-4 shadow-xl dark:bg-[#18181B]`} 
                        style={{ backgroundColor: card.color }}
                    >
                        
                        <div className="flex justify-center items-center">
                            <span className="text-6xl">
                                {card.icon}
                            </span>
                        </div>
                        <p className="text-3xl text-center">{card.digit}</p>
                        <h1 className="text-lg font-semibold px-5 text-center">{card.title}</h1>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeParseCard;









