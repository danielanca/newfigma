import classes from "../CoinDetails/CoinDetails.module.css";
import sinGradient from "../../media/bottom_wave.svg";
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

				<CardBoard />
				<img
					className={classes.gradientRotateBottom}
					src={sinGradient}
				></img>
			</div>
		</Fragment>
	);
};

export default CoinDetails;
