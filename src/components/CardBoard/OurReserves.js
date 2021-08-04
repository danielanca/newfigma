import { Fragment } from "react";
import IconPlusName from "./IconPlusName";
import IconImporter from "./IconImporter";
const OurReserves = () => {
	return (
		<Fragment>
			{IconImporter.map((data) => (
				<IconPlusName iconData={data} />
			))}
		</Fragment>
	);
};
export default OurReserves;
