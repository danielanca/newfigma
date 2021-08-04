import coinBase_logo from "../../media/coinBase_logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./NavBar.css";
import NavLink_Items from "./NavLink_Items";
const NavBar = () => {
	return (
		<div className="container-fluid">
			<div className="row navC flex-column">
				<div className="logostyle col-sm-3">
					<img className="logoWrapper" src={coinBase_logo}></img>
				</div>

				<NavLink_Items />
			</div>
		</div>
	);
};

export default NavBar;
