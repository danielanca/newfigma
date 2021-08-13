import { Fragment } from "react";
import NavBar from "../components/NavBar/NavBar";
import HeroHeader from "../components/Hero/HeroHeader";
import aboutHeader from "../media/page_about/about_header.png";
import AboutCompany from "../components/AboutCompany/AboutCompany";
import OurhistoryTimeline from "../components/OurhistoryTimeline/OurhistoryTimeline";
import MeetTheTeam from "../components/MeetTheTeam/MeetTheTeam";
import FooterSection from "../components/Footer/FooterSection";
const AboutPage = () => {
	return (
		<div>
			<NavBar />
			<HeroHeader
				imageSrc={aboutHeader}
				headerTitle="Great service Professional support"
				headerDescription="CoinBase is a platform for trading your bitcoin and giftcard at the best rate, why not give us a trial."
			/>
			<AboutCompany />
			<OurhistoryTimeline />

			<MeetTheTeam />
			<FooterSection />
		</div>
	);
};

export default AboutPage;
