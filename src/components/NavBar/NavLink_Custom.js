import "bootstrap/dist/css/bootstrap.min.css";
import classes from "../NavBar/NavLink_Custom.module.css";

const NavLink_Custom = (props) => {
	let text = props.text;
	let direct_link = props.link;
	const clickHandler = (eventClicked) => {
		props.linkClicked(text);
	};
	return (
		<li className="nav-item item my-auto ">
			<a
				onClick={clickHandler}
				className={"mx-4 " + classes.textAlignma}
				href={direct_link}
			>
				{text}
			</a>
		</li>
	);
};

export default NavLink_Custom;
