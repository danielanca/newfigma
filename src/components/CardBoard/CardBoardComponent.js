import classes from "./CardBoardComponent.module.css";
import HeaderText from "../TextCustom/HeaderText";
const CardBoardComponent = (props) => {
	let cardBoard_Dimension = " ";
	switch (props.cardBoardSize) {
		case "large":
			cardBoard_Dimension = classes.cardBoardLarge;
			break;
		case "small":
			cardBoard_Dimension = classes.cardBoardSmall;
			break;
	}

	return (
		<div
			className={
				props.customBootstrap +
				"  " +
				classes.cardBoardComponent +
				" " +
				cardBoard_Dimension
			}
		>
			<div className="row ">
				<HeaderText customBootstrap="mt-5" text="Trade from anywhere" />
				<div className="row">
					<div className={"col-sm-6 " + classes.borderDEBUG}></div>
					<div className={"col-sm-6 " + classes.borderDEBUG}>NA</div>
				</div>
			</div>
		</div>
	);
};

export default CardBoardComponent;
