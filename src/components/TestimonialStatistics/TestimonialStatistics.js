import classes from "../TestimonialStatistics/TestimonialStatistics.module.css";
import oval from "../../media/Oval.svg";
import star from "../../media/Star-2.svg";
import bitcoin from "../../media/BITCOIN_ICON.svg";
import topWave from "../../media/bottom_wave.png";
const TestimonialStatistics = () => {
	return (
		<div className={"container-fluid " + classes.backgroundTestimonial}>
			<img src={topWave} className={classes.waveTop}></img>
			<div
				className={
					"row mx-auto " + classes.testimonialHeaderTextWrapper
				}
			>
				<h2 className={classes.testimonialTitle}>
					10.000 satisfied clients around the world{" "}
				</h2>
			</div>
			<div className={"row mx-auto " + classes.TestimonialLine}></div>
			<div className={"row mx-auto " + classes.testimonialTextContainer}>
				<span className={classes.testimonialFullText}>
					Yeah! we’re proud with numbers. We’ve helped thousands of
					clients all around the world with our bespoke service. Hover
					ontop of them pic to view their testimonials.
				</span>
			</div>
			<div className="row">
				<div className={classes.messageCardboard}>
					<div className={classes.messageCardboard_arrow}></div>
					<img className={classes.logoOnEdge} src={bitcoin}></img>
					<div className={classes.contentWrapper}>
						<div className="row">
							<span className={classes.messageAuthorName}>
								Femi from Nigeria
							</span>
						</div>
						<div className="row ">
							<img
								style={{ height: "20px", width: "47px" }}
								src={star}
							></img>
							<img
								style={{ height: "20px", width: "47px" }}
								src={star}
							></img>
							<img
								style={{ height: "20px", width: "47px" }}
								src={star}
							></img>
							<img
								style={{ height: "20px", width: "47px" }}
								src={star}
							></img>
						</div>
						<div className="row">
							<span style={{ fontSize: "1.1rem" }}>
								<b>Wonderful service</b> Good deal and very
								wonderful service thank you.
							</span>
						</div>
					</div>
				</div>

				<img
					style={{
						height: "60px",
						width: "auto",
						marginLeft: "120px",
					}}
					src={oval}
				></img>
				<img
					style={{
						height: "110px",
						width: "auto",
						marginLeft: "120px",
					}}
					src={oval}
				></img>
				<img
					style={{
						height: "120px",
						width: "auto",
						marginLeft: "186px",
						marginTop: "20px",
					}}
					src={oval}
				></img>
				<img
					style={{
						height: "180px",
						width: "auto",
						marginLeft: "286px",
						marginTop: "60px",
					}}
					src={oval}
				></img>
				<img
					style={{
						height: "50px",
						width: "auto",
						marginLeft: "0px",
						marginTop: "10px",
					}}
					src={oval}
				></img>
			</div>
			<img src={topWave} className={classes.waveBottom}></img>
		</div>
	);
};

export default TestimonialStatistics;
