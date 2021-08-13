import classes from "./Backdrops.module.css";
import CoinCardImporter from "./CoinCardsImporter";
import GiftCardsImporter from "./GiftCardImporter";
import elipse_orange from "../../media/backdrops/ellipse_orange.png";
import elipse_blue from "../../media/backdrops/ellipse_blue.png";
import elipse_green from "../../media/backdrops/ellipse_blue.png";
import elipse_mov from "../../media/backdrops/ellipse_mov.png";
import Button from "../Button/Button";
import { Fragment } from "react";

const ProceedDialogCoin = (props) => {
	let Name = props.Name;

	let outSum = props.outSum;
	let cardDesignTop;
	let index_card;

	let DialogType;
	switch (Name) {
		case "Bitcoin":
			cardDesignTop = elipse_orange;
			index_card = 0;
			DialogType = "COIN";
			break;

		case "Ethereum":
			cardDesignTop = elipse_blue;
			index_card = 1;
			DialogType = "COIN";
			break;

		case "AmazonCard":
			cardDesignTop = elipse_orange;
			DialogType = "CARD";
			index_card = 0;
			break;
		case "AppleStoreCard":
			cardDesignTop = elipse_blue;
			DialogType = "CARD";
			index_card = 1;
			break;
		case "GooglePlayCard":
			cardDesignTop = elipse_green;
			DialogType = "CARD";
			index_card = 2;
			break;
		case "SteamCard":
			DialogType = "CARD";
			cardDesignTop = elipse_mov;
			index_card = 3;
			break;

		case "OthersCard":
			DialogType = "CARD";
			cardDesignTop = elipse_mov;
			index_card = 4;
			break;
	}

	return (
		<div
			className={classes.backgroundBackdrop + " " + classes.GiftCardInfo}
		>
			<div className={classes.ellipse_c}>
				<img className={classes.backEllipse} src={cardDesignTop}></img>
				<img
					className={classes.cryptoCoinMiddle}
					src={
						DialogType === "COIN"
							? CoinCardImporter[index_card].image.default
							: GiftCardsImporter[index_card].image.default
					}
				></img>
				<p className={classes.textInner}>
					<a className={classes.quantitybold}>N360.00</a> is our
					conversion rate for
					{DialogType === "COIN"
						? "0.1 " + CoinCardImporter[index_card].coinShort
						: " every " +
						  GiftCardsImporter[index_card].cardName}{" "}
					on this platform.
				</p>
				<div className={classes.fineLine}></div>
				<p className={classes.descriptionProceed}>
					The total value you derived here will be the amount you’ll
					be receiving during the total transaction process
				</p>
			</div>
			<div className={classes.inputWrapperCoin}>
				{DialogType == "COIN" ? (
					<input
						className={classes.inputEmail}
						type="text"
						id="fname"
						name="firstname"
						placeholder="Bitcoin Value"
					></input>
				) : (
					<Fragment>
						<select name="plan" id="plan">
							<option value="none" selected disabled hidden>
								Card type
							</option>
							<option value="free">Free</option>
							<option value="starter">Starter </option>
							<option value="professional">Professional</option>
							<option value="corporate">Corporate</option>
						</select>
						<select name="plan" id="plan">
							<option value="none" selected disabled hidden>
								Card currency
							</option>
							<option value="free">Free</option>
							<option value="starter">Starter </option>
							<option value="professional">Professional</option>
							<option value="corporate">Corporate</option>
						</select>
						<input
							className={classes.inputEmail}
							type="text"
							id="fname"
							name="firstname"
							placeholder="Bitcoin Value"
						></input>
					</Fragment>
				)}
				<div className={classes.outputSum}>
					<div className={classes.outputDotted}>
						<p className={classes.outSum}>#{outSum}</p>
					</div>
				</div>
				<Button
					customStyle={classes.buttonCentered}
					text={"Proceed"}
					backgroundCol={"colored"}
				></Button>
			</div>
		</div>
	);
};

export default ProceedDialogCoin;
