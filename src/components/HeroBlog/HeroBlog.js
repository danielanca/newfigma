import classes from "../HeroBlog/HeroBlog.module.css";

import bottom_wave from "../../media/bottom_wave.png";
import Button from "../Button/Button";

const HeroBlog = (props) => {
	let background_Image = props.backgroundImage;
	let titleHeader = props.titleHeader;
	return (
		<div
			style={{
				"--background_image": `url(${background_Image})`,
			}}
			className={"container-fluid " + classes.header_hero}
		>
			<div className="row ">
				<div className={classes.centerTitle}>
					<h2 className={"mx-auto " + classes.titleHeaderMiddle}>
						{titleHeader}
					</h2>
					<p>23 July 2021 | Bussiness</p>
				</div>
			</div>
			<img className={classes.sinWaveBottom} src={bottom_wave}></img>
		</div>
	);
};

export default HeroBlog;
