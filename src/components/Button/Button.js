import classes from "../Button/Button.module.css";

const Button = (props) => {
	let text = "Button";
	if (props.text != null) {
		text = props.text.toUpperCase();
	} else {
		text = "Click";
	}
	const ButtonHandler = () => {
		props.linkClicked(text.toLocaleLowerCase());
	};
	return (
		<button
			onClick={ButtonHandler}
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
