import classes from "./BackDropBackground.module.css";

const BackDropBackground = (props) => {
	const closeBackdrop = () => {
		props.closeBackdrop("closeBackdrop");
	};

	return (
		<div onClick={closeBackdrop} className={classes.BackdropFull}>
			{props.children}
		</div>
	);
};

export default BackDropBackground;
