import classes from "./Backdrops.module.css";
import CoinCardImporter from "./CoinCardsImporter";
const SellBitcoin = () => {
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
			<div className={classes.cardsGrid + "  " + classes.coinCardsAlign}>
				{CoinCardImporter.map((cards) => (
					<a href={cards.link}>
						<img
							className={classes.cardBoardSizeCoins}
							src={cards.image.default}
						></img>
					</a>
				))}
			</div>
		</div>
	);
};

export default SellBitcoin;
