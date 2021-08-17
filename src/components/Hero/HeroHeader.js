import classes from "../Hero/HeroHeader.module.css";

import bottom_wave from "../../media/bottom_wave.png";
import Button from "../Button/Button";
const HeroHeader = (props) => {
	return (
		<div className={"container-fluid " + classes.header_hero}>
			<div className="row ">
				<div className="col-sm-6">
					<div className={classes.heroWrapper}>
						<div className="row">
							<div
								className={
									"col-sm-8 " + classes.header_text_first
								}
							>
								{props.headerTitle}
							</div>
						</div>

						<div className="row">
							<div
								className={
									"col-sm-8 " +
									classes.header_text_description
								}
							>
								{props.headerDescription}
							</div>
						</div>
						<div className="row">
							<div className={"col-sm-4 " + classes.buttonAlign}>
								<Button
									backgroundCol="light"
									text="GET STARTED"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className={"col-sm-6 " + classes.bordercolor}>
					<img
						className={classes.right_hero}
						src={props.imageSrc}
					></img>
				</div>
			</div>
			<img className={classes.sinWaveBottom} src={bottom_wave}></img>
		</div>
	);
};

export default HeroHeader;
