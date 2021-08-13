import classes from "../DownloadSection/DownloadSection.module.css";
import apple_Store from "../../media/app_Store_icon.png";
import googlePlay_Store from "../../media/googleplay_store_icon.png";
import sinWave from "../../media/bottom_wave.png";
import iPhone_face1 from "../../media/Devices/iPhone/X-1.png";
import iPhone_face2 from "../../media/Devices/iPhone/X-2.png";
const DownloadSection = () => {
	return (
		<div className={"container-fluid " + classes.backgroundDownload}>
			<div
				className={
					"row mx-auto " + classes.testimonialHeaderTextWrapper
				}
			>
				<h2 className={classes.testimonialTitle}>Download our app</h2>
			</div>
			<div className={"row mx-auto " + classes.TestimonialLine}></div>
			<div className={"row mx-auto " + classes.testimonialTextContainer}>
				<span className={classes.testimonialFullText}>
					Discover exclusive deals and discounts with our mobile
					experience.
				</span>
			</div>
			<div className={"row mx-auto"}>
				<img
					style={{ height: "20px", width: "30px" }}
					src={apple_Store}
				></img>
				<img
					style={{ height: "20px", width: "30px" }}
					src={googlePlay_Store}
				></img>
			</div>
			<img src={sinWave} className={classes.waveTop}></img>
			<div className={"row "}>
				<img
					className={classes.iPhoneFace}
					style={{ left: "23%" }}
					src={iPhone_face1}
				></img>
				<img
					className={classes.iPhoneFace}
					style={{ left: "49%" }}
					src={iPhone_face2}
				></img>
			</div>
		</div>
	);
};

export default DownloadSection;
