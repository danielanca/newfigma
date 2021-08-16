import { Fragment } from "react";
import classes from "./BackDropBackground.module.css";

const BackDropBackground = (props) => {
	const closeBackdrop = () => {
		props.closeBackdrop("closeBackdrop");
		console.log("DROPPPP");
	};

	return (
		<Fragment>
			<div onClick={closeBackdrop} className={classes.BackdropFull}></div>
			{props.children}
		</Fragment>
	);
};

export default BackDropBackground;
