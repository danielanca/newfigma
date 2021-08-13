import HeaderTextInfo from "../HeaderTextInfo/HeaderTextInfo";
import classes from "./AboutCompany.module.css";
import welcomeHero from "../../media/page_about/welcome_hero.svg";
import honorIcons from "../../media/qualities.png";
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
					<div className={classes.centeredInner}>
						<img
							className={classes.welcomeHeroImg}
							src={welcomeHero}
						></img>
					</div>
					<HeaderTextInfo fontSize="small" title="	About Coinbase" />
					<div className={classes.paragraphParent}>
						<p className={classes.paraText}>
							CoinBase is an online site and a p2admin platform
							that allows users to buy, sell and/ or exchange
							digital and fiat assets safely. Owned and managed by
							CoinBase Business Services established and
							Incoperated in Nigeria.
						</p>
					</div>
					<div>
						<img
							className={classes.honorIcons}
							src={honorIcons}
						></img>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutCompany;
