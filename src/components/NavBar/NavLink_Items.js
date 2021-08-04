import Button from "../Button/Button";
import "bootstrap/dist/css/bootstrap.min.css";

import NavLink_Custom from "./NavLink_Custom";

const NavLink_Items = () => {
	return (
		<ul className="navbar my-auto " style={{ listStyleType: "none" }}>
			<NavLink_Custom
				text="Home"
				link="https://nomorecoffeeplease.com"
				light_color="no"
			/>
			<NavLink_Custom
				text="Welcome"
				link="https://nomorecoffeeplease.com"
				light_color="yes"
			/>
			<NavLink_Custom
				text="About US"
				link="https://nomorecoffeeplease.com"
				light_color="no"
			/>
			<NavLink_Custom
				text="Contact Us"
				link="https://nomorecoffeeplease.com"
				light_color="no"
			/>
			<NavLink_Custom
				text="Sell Bitcoin/Giftcard"
				link="https://nomorecoffeeplease.com"
			/>

			<Button customStyle="mt-1" text={"Login"} backgroundCol="color" />
		</ul>
	);
};

export default NavLink_Items;
