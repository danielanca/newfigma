import classes from "./CardBoardComponent.module.css";
import HeaderText from "../TextCustom/HeaderText";
import Card from "../Card/Card";
import IconImporter from "./IconImporter";
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
					<div className={"col-sm-6 d-flex justify-content-end "}>
						<Card
							coinName={IconImporter[1].coinName}
							coinImage={IconImporter[1].image}
							customBoot="mx-2"
						/>
					</div>
					<div className={"col-sm-6 d-flex justify-content-start "}>
						<Card
							coinName={IconImporter[3].coinName}
							coinImage={IconImporter[3].image}
							customBoot="mx-2"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardBoardComponent;
