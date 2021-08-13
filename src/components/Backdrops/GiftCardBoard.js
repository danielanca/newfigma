import classes from "./Backdrops.module.css";
import Button from "../Button/Button";
import CardsImporter from "./CardsImporter";
const GiftCardBoard = () => {
	const CardGiftClickHandler = (card_number) => {
		console.log("Card selected:" + card_number);
	};
	return (
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
							cards.cardName
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
	);
};
export default GiftCardBoard;
