import HeaderTextInfo from "../HeaderTextInfo/HeaderTextInfo";
import classes from "./AboutCompany.module.css";
import welcomeHero from "../../media/page_about/welcome_hero.svg";
const AboutCompany = () => {
	return (
		<div className={"container-fluid " + classes.aboutCompany}>
			<div className="row">
				<HeaderTextInfo
					fontSize="small"
					textFull="Ramon Ridwan • CEO CoinBase"
					title="“Morbi sagittis ultricies ex, a tempus lorem suscipit non. Donec semper leo ut lobortis condimentum. Orci varius natoque penatibus et magnis”"
				/>
			</div>
			<div className="row">
				<div className={"mx-auto " + classes.cardBoardAbout}>
					<img src={welcomeHero}></img>
					<HeaderTextInfo
						fontSize="small"
						textFull="Ramon Ridwan • CEO CoinBase"
						title="	About Coinbase"
					/>
				</div>
			</div>
		</div>
	);
};

export default AboutCompany;
