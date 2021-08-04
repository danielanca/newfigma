import classes from "./IconPlusName.module.css";
const IconPlusName = (props) => {
	let image = props.iconData.image;
	let coinName = props.iconData.coinName;
	return (
		<div className="row ">
			<div className="col-sm-8 d-inline-flex my-3 ">
				<img
					className={" mx-4 " + classes.logoComponent}
					src={image.default}
				/>
				<p className={classes.reservesText}> {coinName}</p>
			</div>

			<div className="col-sm-4">NGN #3452030300303.24/$</div>
		</div>
	);
};

export default IconPlusName;
