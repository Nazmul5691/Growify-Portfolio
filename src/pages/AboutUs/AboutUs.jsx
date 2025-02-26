/* eslint-disable react/no-unescaped-entities */

import AboutUsBanner from "../../components/AboutUsPage/AboutUsBanner";
import AboutUsTeamMembers from "../../components/AboutUsPage/AboutUsTeamMembers";
import Milestone from "../../components/AboutUsPage/Milestone";
import OurVision from "../../components/AboutUsPage/OurVision";
import WePursue from "../../components/AboutUsPage/WePursue";
import WorkingProcess from "../../components/AboutUsPage/WorkingProcess";


const AboutUs = () => {
    return (
        <div>
            <div>
                <AboutUsBanner></AboutUsBanner>
            </div>

            <div>
                <WePursue></WePursue>
            </div>

            <div>
                <WorkingProcess></WorkingProcess>
            </div>

            <OurVision></OurVision>

            <div>
                <Milestone></Milestone>
            </div>

            <div>
                <AboutUsTeamMembers></AboutUsTeamMembers>
            </div>


        </div>

    );
};

export default AboutUs;

