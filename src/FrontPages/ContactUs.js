import NavBar from "../components/NavBar/NavBar";
import HeroHeader from "../components/Hero/HeroHeader";
import ContactFormSection from "../components/ContactForm/ContactFormSection";
import header_ContactUs from "../media/contactus_page/contactus_header.png";
import FooterSection from "../components/Footer/FooterSection";
const ContactUs = () => {
	return (
		<div>
			<NavBar></NavBar>
			<HeroHeader
				imageSrc={header_ContactUs}
				headerTitle="24/7 Customer support Including weekends."
				headerDescription="We’re always there ti help regardless the number
                of queries at hand"
			/>
			<ContactFormSection />

			<FooterSection />
		</div>
	);
};

export default ContactUs;
