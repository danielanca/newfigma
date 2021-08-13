import { Fragment } from "react";
import classes from "../HeaderTextInfo/HeaderTextInfo.module.css";
const HeaderTextInfo = (props) => {
	let title = props.title;
	let textFull = props.textFull;
	let fontSize = props.fontSize;
	let customStyle = "";
	switch (fontSize) {
		case "small":
			customStyle = classes.smallFontSize;
			break;
		case "large":
			break;
	}
	return (
		<Fragment>
			<div
				className={
					"row mx-auto " + classes.testimonialHeaderTextWrapper
				}
			>
				<span className={classes.testimonialTitle + " " + customStyle}>
					{title}
				</span>
			</div>
			<div className={"row "}>
				<div className={"mx-auto " + classes.TestimonialLine}></div>
			</div>
			<div className={"row mx-auto " + classes.testimonialTextContainer}>
				<span className={classes.testimonialFullText}>{textFull}</span>
			</div>
		</Fragment>
	);
};

export default HeaderTextInfo;
