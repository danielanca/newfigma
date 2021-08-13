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
			<div className={classes.testimonialHeaderTextWrapper}>
				<p className={classes.testimonialTitle + " " + customStyle}>
					{title}
				</p>

				<div className={classes.lineMiddle}>
					<div className={"" + classes.TestimonialLine}></div>
				</div>
				<div className={"" + classes.testimonialTextContainer}>
					<span className={classes.testimonialFullText}>
						{textFull}
					</span>
				</div>
			</div>
		</Fragment>
	);
};

export default HeaderTextInfo;
