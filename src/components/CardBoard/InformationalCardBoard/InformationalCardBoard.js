import classes from "../InformationalCardBoard/InformationalCardBoard.module.css";

const InformationalCardBoard = (props) => {
	return (
		<div className={props.customStyle + " " + classes.infoCard}>
			<p className={classes.textInfo}>{props.text} </p>
		</div>
	);
};

export default InformationalCardBoard;
