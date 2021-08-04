import classes from "../CardBoard/CardBoard.module.css";
import CoinData from "../CoinData/CoinData";
import InformationalCardBoard from "./InformationalCardBoard/InformationalCardBoard";
import OurReserves from "./OurReserves";
const CardBoard = (props) => {
	let customCard = props.customCardDimension;
	let customDimension = " ";

	switch (customCard) {
		case "small":
			customDimension = classes.cardSmall;
			break;
		case "large":
			customDimension = classes.cardLarge;
			break;
	}

	return (
		<div className={classes.cardBoardComponent}>
			<div className="row">
				<div className="col-sm-4 ">
					<div className={"row " + classes.borderBottom}>
						<div className={classes.card_border}>
							<p className={classes.textHeader}>Our Rates</p>
						</div>
					</div>
					<CoinData
						coinName="BTC"
						sellRate="N350/$"
						buyRate="N370/$"
					/>
					<CoinData
						coinName="ETC"
						sellRate="N345/$"
						buyRate="N370/$"
					/>
				</div>
				<div className="col-sm-4">
					<div className={"row " + classes.borderBottom}>
						<div className={classes.card_border}>
							<p className={classes.textHeader}>OUR RESERVES</p>
						</div>
					</div>
					<div className="row">
						<OurReserves />
					</div>
				</div>
				<div className="col-sm-4">
					<div className={"row " + classes.borderBottom}>
						<div className={classes.card_border}>
							<p className={classes.textHeader}>
								LATEST EXCHANGES
							</p>
						</div>
					</div>
					<div className="row">
						<InformationalCardBoard
							customStyle=" mx-auto mt-3 "
							text="8 hours ago"
						/>
					</div>
					<div className="row">Bitcoin BTC Bank Transfer NGN</div>
				</div>
			</div>
		</div>
	);
};

export default CardBoard;
