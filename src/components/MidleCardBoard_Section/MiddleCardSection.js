import classes from "../MidleCardBoard_Section/MiddleCardSection.module.css";
import sinWaveBottom from "../../media/bottom_wave.png";

import CardBoardComponent from "../CardBoard/CardBoardComponent";

const MiddleCardSection = () => {
	return (
		<div
			className={"container-fluid " + classes.MiddleCardSectionBackground}
		>
			<img
				className={classes.MiddleCardwavePosition}
				src={sinWaveBottom}
			></img>

			<div className="row">
				<div className="col-sm-12 mx-auto  ">
					<CardBoardComponent
						customBootstrap="  "
						cardBoardSize="large"
					/>
					<div className="row  ">
						<div className={"mx-auto " + classes.smallLine}></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MiddleCardSection;
