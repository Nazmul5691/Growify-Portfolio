import Menu from './Menu';
import './portfolio.css';
import { useState } from 'react';

const HomePagePortfolio = () => {
    const [items, setItem] = useState(Menu.slice(0, 6)); // Start with first 6 items

    const filterItem = (categoryItem) => {
        if (categoryItem === "Everything") {
            setItem(Menu.slice(0, 6)); // Show first 6 items for "Everything"
        } else {
            const filteredItems = Menu.filter((curElem) => curElem.category === categoryItem);
            setItem(filteredItems.slice(0, 6)); // Limit to first 6 items of the category
        }
    };

    return (
        <section className="work container section px-20 pb-10" id="portfolio">

            <div className="text-center items-center">
                <h2 className="text-lg">POPULAR PROJECTS</h2>
                <h1 className="text-4xl font-bold pt-4 pb-8">Our Recent Project</h1>
            </div>

            <div className="work_filters">
                <span className="work_item" onClick={() => filterItem("Everything")}>Everything</span>
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

            <div className="flex justify-center pt-4">
                <button className="mt-4 bg-[#604ffd] text-white px-3 py-1 rounded-sm flex items-center">
                    Explore More <span className="ml-2">➔</span>
                </button>
            </div>

        </section>
    );
};

export default HomePagePortfolio;



