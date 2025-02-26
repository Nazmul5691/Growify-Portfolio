import './portfolio.css';
import { useState } from 'react';



const Portfolio = () => {


    const Menu = [
        {
            id: 1,
            image: "https://i.ibb.co/9cFKn0Z/Eco-Shop-Online-Store.jpg",
            title: "EcoShop Online Store",
            category: "Creative",
            link: "#",
        },
        {
            id: 2,
            image: "https://i.ibb.co/wR6MfkZ/Health-First-Clinics.jpg",
            title: "Health First Clinics",
            category: "Creative",
            link: "#",
    
        },
        {
            id: 3,
            image: "https://i.ibb.co/HPnmT4v/Urban-Living-Apartments2.jpg",
            title: "Urban Living Apartments",
            category: "Creative",
            link: "#"
        },
        {
            id: 4,
            image: "https://i.ibb.co/gv0n1TB/Tech-Savvy-Solutions.jpg",
            title: "TechSavvy Solutions",
            category: "Simple",
            link: "#",
        },
        {
            id: 5,
            image: "https://i.ibb.co/nL78L7T/Green-Energy-Co.jpg",
            title: "Green Energy Co.",
            category: "Creative",
            link: "#"
        },
        {
            id: 6,
            image: "https://i.ibb.co/Pxkn6dB/Luxury-Escapes-Travel.jpg",
            title: "Luxury Escapes Travel",
            category: "Simple",
            link: "#",
        },
        {
            id: 7,
            image: "https://i.ibb.co/NsY1F4k/Fitness-Pro-Gym.jpg",
            title: "FitnessPro Gym",
            category: "Creative",
            link: "#",
        },
        {
            id: 8,
            image: "https://i.ibb.co/F8fkX6V/Artisan-Coffee-House.jpg",
            title: "Artisan Coffee House",
            category: "Simple",
            link: "#",
        },
        {
            id: 9,
            image: "https://i.ibb.co/cFGws7r/Donation-Campaign.jpg",
            title: "Donation Campaign",
            category: "Creative",
            link: "#",
        },
        {
            id: 10,
            image: "https://i.ibb.co/kgL0dM8/Bright-Minds-Academy.jpg",
            title: "Bright Minds Academy",
            category: "Simple",
            link: "#",
        },
        {
            id: 11,
            image: "https://i.ibb.co/nnvPShx/Nature-s-Best-Cosmetics.jpg",
            title: "Nature's Best Cosmetics",
            category: "Creative",
            link: "#",
        },
    ];


    const [items, setItem] = useState(Menu);
    const filterItem = (categoryItem) => {
        const updateItems = Menu.filter((curElem) => {
            return curElem.category === categoryItem;
        })

        setItem(updateItems)
    }


    return (
        <section className="work container section px-20 pb-10 " id="portfolio">

            <div className="text-center items-center">
                <h2 className=" lg:text-lg">POPULAR PROJECTS</h2>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold pt-2 lg:pt-4 pb-5 lg:pb-8">Our Recent Project 
                </h1>

            </div>

            <div className="work_filters">
                <span className="work_item" onClick={() => setItem(Menu)}>Everything</span>
                <span className="work_item" onClick={() => filterItem("Creative")}>Creative</span>
                <span className="work_item" onClick={() => filterItem("Simple")}>Simple</span>

            </div>

            <div className="work_container grid">
                {
                    items.map((elem) => {
                        const { id, image, title, category, link } = elem;
                        return (
                            <div className="work_card" key={id}>
                                <div className="work_thumbnail">
                                    <img src={image} alt="" className="work_img h-[280px] w-full" />
                                    <div className='work_mask'></div>
                                </div>

                                <span className="work_category">{category}</span>
                                <h3 className="work_title">{title}</h3>
                                <a href={link} target="_blank" rel="noopener noreferrer" className="work_button">
                                    {/* <i className="icon-link work_button-icon"></i> */}
                                    View details
                                </a>
                            </div>
                        )
                    })
                }
            </div>

            {/* <div className="flex justify-center pt-4">
                <button className="mt-4 bg-[#604ffd] text-white px-3 py-1 rounded-sm flex items-center">
                    Explore More <span className="ml-2">➔</span>
                </button>
            </div> */}


        </section>
    );
};

export default Portfolio;









