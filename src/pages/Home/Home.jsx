
import Banner from "../../components/Banner";
import BlogPost from "../../components/BlogPost";
import MarketingService from "../../components/MarketingService";
import Review from "../../components/Review";
import TailoredSolutions from "../../components/TailoredSolutions";
import TrustedCompanies from "../../components/TrustedCompanies";
import FAQ from "../../components/FAQ";
import NextLevel from "../../components/NextLevel";
import TeamMembers from "../../components/TeamMembers";
import HomePageAboutAgency from "../../components/HomePageAboutAgency";
import HomePagePortfolio from "../../components/HomePagePortfolio/HomePagePortfolio";


const Home = () => {



    return (
        <div>
            <div>
                <Banner></Banner>
            </div>

            <div>
                <TrustedCompanies></TrustedCompanies>
            </div>

            <div>
                <HomePageAboutAgency></HomePageAboutAgency>
            </div>

            <div>
                <MarketingService></MarketingService>
            </div>

            <div>
                <TailoredSolutions></TailoredSolutions>
            </div>

            <div>
                <HomePagePortfolio></HomePagePortfolio>
            </div>

            <div>
                <BlogPost></BlogPost>
            </div>

            <div>
                <TeamMembers></TeamMembers>
            </div>

            <div>
                <Review></Review>
            </div>

            <div>
                <FAQ></FAQ>
            </div>

            <div>
                <NextLevel></NextLevel>
            </div>


        </div>
    );
};

export default Home;