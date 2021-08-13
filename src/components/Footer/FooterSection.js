import classes from "../Footer/FooterSection.module.css";
import coinBaseFooter from "../../media/coinBase_footer.png";
import socialMediaIcons from "../../media/socialMediaIcons.png";
import FooterLinksComponent from "../FooterLinksComponent/FooterLinksComponent";
import instagramGray from "../../media/instagram_gray.png";
const FooterSection = () => {
	let instagramArrayTest = [
		{ text: "Poza1", image: instagramGray },
		{ text: "Poza2", image: instagramGray },
		{ text: "Poza3", image: instagramGray },
		{ text: "Poza4", image: instagramGray },
		{ text: "Poza5", image: instagramGray },
		{ text: "Poza6", image: instagramGray },
		{ text: "Poza7", image: instagramGray },
		{ text: "Poza8", image: instagramGray },
	];
	return (
		<div className={"container-fluid " + classes.backgroundFooter}>
			<div className="row">
				<div className="col-sm-4">
					<div className={classes.socialWrapper}>
						<div className="row">
							<img
								className={classes.iconFooter}
								src={coinBaseFooter}
							></img>
						</div>
						<div className="row">
							<span className={classes.FooterLeftText}>
								Fusce ut elit aliquet, fermentum leo vel, tempus
								nunc. Fusce eu rhoncus augue. Fusce vel metus
								pharetra, fermentum
							</span>
						</div>
						<div className="row">
							<img
								className={classes.socials}
								src={socialMediaIcons}
							></img>
						</div>
					</div>
				</div>
				<div className="col-sm-4 d-inline-flex p-2">
					<div className="col-sm-6">
						<FooterLinksComponent footerTitle="Contact" />
					</div>
					<div className="col-sm-6">
						<FooterLinksComponent footerTitle="CoinBase Links" />
					</div>
				</div>
				<div className="col-sm-4">
					<h2 className={classes.instagramWrapperTitle}>
						CoinBASE instagram
					</h2>
					<div className={classes.instagramGallery}>
						{instagramArrayTest.map((itemPicture) => (
							<img
								alt={itemPicture.text}
								className={classes.instagramThumbnail}
								src={itemPicture.image}
							></img>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FooterSection;
