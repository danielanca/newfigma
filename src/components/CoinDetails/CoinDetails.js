import classes from "../CoinDetails/CoinDetails.module.css";
import sinGradient from "../../media/bottom_wave.png";
import { Fragment } from "react";
import CardBoard from "../CardBoard/CardBoard";
const CoinDetails = () => {
	return (
		<Fragment>
			<div className={"container-fluid " + classes.backgroundCoinDetails}>
				<img
					className={classes.gradientRotateTop}
					src={sinGradient}
				></img>

				<CardBoard customCardDimension="small" />
				<img
					className={classes.gradientRotateBottom}
					src={sinGradient}
				></img>
			</div>
		</Fragment>
	);
};

export default CoinDetails;
