import NavBar from "./NavBar/NavBar";
import HeroHeader from "./Hero/HeroHeader";
import HeroSection from "./HeroSection/HeroSection";
import CoinDetails from "./CoinDetails/CoinDetails";
import MiddleCardSection from "./MidleCardBoard_Section/MiddleCardSection";
import OurBlogSection from "./OurBlogSection/OurBlogSection";
import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroArticlesImporter from "../ArticlesData/HeroArticlesImporter";
const Homepage = () => {
	return (
		<Fragment>
			<NavBar />
			<HeroHeader />
			<HeroSection
				headerTitle={HeroArticlesImporter[0].headerTitle}
				TextDescription={HeroArticlesImporter[0].fullDescription}
				imgSrc={HeroArticlesImporter[0].imageHeader}
				buttonMessage="Discover"
				customStyle="mt-2"
				orientationType="left"
			/>
			<CoinDetails />
			<HeroSection
				headerTitle={HeroArticlesImporter[1].headerTitle}
				TextDescription={HeroArticlesImporter[1].fullDescription}
				imgSrc={HeroArticlesImporter[1].imageHeader}
				customStyle="mt-5"
				buttonMessage="Discover Here"
				orientationType="right"
			/>
			<MiddleCardSection />
			<OurBlogSection />
		</Fragment>
	);
};

export default Homepage;
