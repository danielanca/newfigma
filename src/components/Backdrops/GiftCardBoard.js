import { useState } from "react";
import classes from "./Backdrops.module.css";
import CardsImporter from "./CardsImporter";
import ProceedDialogCoin from "./ProceedDialogCoin";
import { useEffect } from "react";
const GiftCardBoard = () => {
	const [DialogSelected, setDialogSelected] = useState(null);
	const CardGiftClickHandler = (card_number) => {
		console.log("Card selected:" + card_number);
		setDialogSelected(card_number);
	};
	// useEffect(() => {
	//
	// }, [DialogSelected]);
	return DialogSelected === null ? (
		<div
			className={classes.backgroundBackdrop + " " + classes.GiftCardInfo}
		>
			<div>
				<p className={classes.messageHead}>Got Gift Cards For Sale?</p>
				<p className={classes.textDesc}>
					Choose your preferred card type to continue the exchange
					process
				</p>
			</div>
			<div className={classes.cardsGrid}>
				{CardsImporter.map((cards) => (
					<a
						onClick={CardGiftClickHandler.bind(
							this,
							cards.code_card
						)}
					>
						<img
							className={classes.cardboardSize}
							src={cards.image.default}
						></img>
					</a>
				))}
			</div>
		</div>
	) : (
		<ProceedDialogCoin Name={DialogSelected} outSum={"20"} />
	);
};
export default GiftCardBoard;
