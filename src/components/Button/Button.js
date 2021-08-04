import classes from "../Button/Button.module.css";

const Button = (props) => {
	let text;
	if (props.text != null) {
		text = props.text.toUpperCase();
	} else {
		text = "Click";
	}

	return (
		<button
			className={
				(props.backgroundCol.includes("light")
					? classes.buttonShapeLight
					: classes.buttonShapeColored) +
				" ml-1 " +
				props.customStyle
			}
		>
			{text}
		</button>
	);
};

export default Button;
