/* eslint-disable react/no-unescaped-entities */

import PortfolioPageBanner from "../../components/PortfolioPage/PortfolioPageBanner";
import Projects from "../../components/PortfolioPage/Projects";


const Portfolio = () => {
    return (
        <div>
            <div>
                <PortfolioPageBanner></PortfolioPageBanner>
            </div>

            <div>
                <Projects></Projects>
            </div>
        </div>
    );
};

export default Portfolio;