import coinBase_logo from "../../media/coinBase_logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./NavBar.css";
import NavLink_Items from "./NavLink_Items";
import { useState } from "react";
import BackDropBackground from "../Backdrops/BackDropBackground";
import { Fragment } from "react";
import GiftCardBoard from "../Backdrops/GiftCardBoard";
import LogInCardBoard from "../Backdrops/LogInCardBoard";
const NavBar = () => {
	const [backdropOn, setbackdropOn] = useState(null);
	const clickHandler = (event) => {
		if (event === "closeBackdrop") {
			setbackdropOn(null);
		} else {
			console.log("Navbar received:" + event);
			setbackdropOn(event);
		}
	};
	return (
		<Fragment>
			{backdropOn !== null ? (
				<BackDropBackground closeBackdrop={clickHandler}>
					{backdropOn.includes("card") ? (
						<GiftCardBoard></GiftCardBoard>
					) : backdropOn.includes("login") ? (
						<LogInCardBoard></LogInCardBoard>
					) : (
						""
					)}
				</BackDropBackground>
			) : (
				""
			)}
			<div className="container-fluid">
				<div className="row navC flex-column">
					<div className="logostyle col-sm-3">
						<img className="logoWrapper" src={coinBase_logo}></img>
					</div>

					<NavLink_Items itemAccesed={clickHandler} />
				</div>
			</div>
		</Fragment>
	);
};

export default NavBar;
