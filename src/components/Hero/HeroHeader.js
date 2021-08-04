import classes from "../Hero/HeroHeader.module.css";
import hero_header_pic from "../../media/hero_header_right.png";
import bottom_wave from "../../media/bottom_wave.svg";
import Button from "../Button/Button";
const HeroHeader = () => {
	return (
		<div className={"container-fluid " + classes.header_hero}>
			<div className="row ">
				<div className="col-sm-6">
					<div className={classes.heroWrapper}>
						<div className="row">
							<div
								className={
									"col-sm-8 " +
									classes.bordercolor +
									" " +
									classes.header_text_first
								}
							>
								We provide easy solution to exchange your
								Bitcoin/ GiftCard for money
							</div>
						</div>

						<div className="row">
							<div
								className={
									"col-sm-8 " +
									classes.bordercolor +
									" " +
									classes.header_text_description
								}
							>
								CoinBase is a platform for trading your bitcoin
								and giftcard at the best rate, why not give us a
								trial.
							</div>
						</div>
						<div className="row">
							<div className={"col-sm-4 " + classes.buttonAlign}>
								<Button
									backgroundCol="light"
									text="GET STARTED"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className={"col-sm-6 " + classes.bordercolor}>
					<img
						className={classes.right_hero}
						src={hero_header_pic}
					></img>
				</div>
			</div>
			<img className={classes.sinWaveBottom} src={bottom_wave}></img>
		</div>
	);
};

export default HeroHeader;
