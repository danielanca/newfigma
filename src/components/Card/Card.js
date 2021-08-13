import classes from "../Card/Card.module.css";
const Card = (props) => {
	let coinImage = props.coinImage;
	let coinName = props.coinName;
	return (
		<div className={props.customBoot + " " + classes.cardStructure}>
			<div className="row">
				<div className="row">
					<img
						className={"mx-auto mt-3 " + classes.imageSizeCard}
						src={coinImage.default}
					></img>
				</div>
				<div className="row">
					<span className={"text-center " + classes.textCard}>
						{coinName}
					</span>
				</div>
			</div>
		</div>
	);
};

export default Card;
