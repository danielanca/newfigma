import classes from "../CoinData/CoinData.module.css";
import BitCoin from "../../media/BITCOIN_ICON.svg";

const CoinData = (props) => {
	let coinName = props.coinName;
	let sellingRate = props.sellRate;
	let buyingRate = props.buyRate;
	return (
		<div className={"row ml-1 " + classes.customSpacingCoin}>
			<div className="col-sm-6 ">
				<a className={"row " + classes.coinContainer}>
					<img
						className={"col-sm-6 " + classes.coinIcon}
						src={BitCoin}
					/>
					<p className={"col-sm-6 " + classes.coinText}>{coinName}</p>
				</a>
			</div>
			<div className="col-sm-6">
				<div className="row ">
					<p className="">
						We buy @ <b> {buyingRate} </b>
					</p>
				</div>
				<div className="row">
					<p className="">
						We sell @ <b>{sellingRate}</b>
					</p>
				</div>
			</div>
		</div>
	);
};

export default CoinData;
