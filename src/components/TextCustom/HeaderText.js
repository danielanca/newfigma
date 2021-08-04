import classes from "../TextCustom/HeaderText.module.css";
const HeaderText = (props) => {
	let customBoot = " ";
	if (props.customBootstrap !== null) {
		customBoot = props.customBootstrap;
	}
	return (
		<span className={customBoot + " " + classes.headerText_font}>
			{props.text}
		</span>
	);
};

export default HeaderText;
