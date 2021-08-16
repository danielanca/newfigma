import NavBar from "../components/NavBar/NavBar";
import HeroHeader from "../components/Hero/HeroHeader";
import HeroSection from "../components/HeroSection/HeroSection";
import CoinDetails from "../components/CoinDetails/CoinDetails";
import MiddleCardSection from "../components/MidleCardBoard_Section/MiddleCardSection";
import OurBlogSection from "../components/OurBlogSection/OurBlogSection";
import { Fragment } from "react";
import HeroArticlesImporter from "../ArticlesData/HeroArticlesImporter";
import TestimonialStatistics from "../components/TestimonialStatistics/TestimonialStatistics";
import DownloadSection from "../components/DownloadSection/DownloadSection";
import NewsletterSection from "../components/NewsletterSection/NewsletterSection";
import FooterSection from "../components/Footer/FooterSection";
import landingHeader from "../media/lading_page/hero_header_right.png";
import BackDropBackground from "../components/Backdrops/BackDropBackground";
import GiftCardBoard from "../components/Backdrops/GiftCardBoard";

const Homepage = () => {
	return (
		<Fragment>
			<NavBar />
			<HeroHeader
				imageSrc={landingHeader}
				headerTitle="We provide easy solution 
				to exchange your Bitcoin/ 
				GiftCard for money"
				headerDescription="CoinBase is a platform for trading your bitcoin and 
				giftcard at the best rate, why not give us a trial."
			/>
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
			<TestimonialStatistics />
			<DownloadSection />
			<NewsletterSection />
			<FooterSection />
		</Fragment>
	);
};

export default Homepage;
