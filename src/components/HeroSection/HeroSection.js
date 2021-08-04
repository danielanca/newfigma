import classes from "../HeroSection/HeroSection.module.css";
import Button from "../Button/Button";
const HeroSection = (props) => {
	let picture_orientation = props.orientationType;
	let image_source = props.imgSrc;
	let header_title = props.headerTitle;
	let full_text = props.TextDescription;
	let buttonMessage = props.buttonMessage;
	return (
		<div
			className={
				"container-fluid " +
				props.customStyle +
				" " +
				classes.containerBackground
			}
		>
			<div className="row flex-row-reverse ">
				<div className="col-sm-6 mt-5">
					<img src={image_source.default}></img>
				</div>
				<div className="col-sm-6 ">
					<div className="row mx-auto ">
						<div className={"mx-auto " + classes.textGradient}>
							{header_title}
						</div>
					</div>
					<div className="row mx-auto ">
						<div className={classes.lineDesign}></div>
					</div>
					<div className="row mx-auto ">
						<div
							className={"mx-auto " + classes.descriptionWrapper}
						>
							<p className={classes.textWrapper}>{full_text}</p>
						</div>
					</div>
					<div className="row mx-auto ">
						<Button
							customStyle=" mt-3 "
							backgroundCol="color"
							text={buttonMessage}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
