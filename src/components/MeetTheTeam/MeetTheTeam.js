import classes from "./MeetTheTeam.module.css";
import colored_cardboard from "../../media/page_about/rectangle_color.png";
import grayed_cardboard from "../../media/page_about/rectangle_gray.png";
import NewsletterSection from "../NewsletterSection/NewsletterSection";
const MeetTheTeam = () => {
	return (
		<div className={"container-fluid " + classes.TeamSection}>
			<div className={"row "}>
				<h2 style={{ textAlign: "center" }} className={"mx-auto "}>
					Our History
				</h2>
				<div className={"mx-auto " + classes.colorLine}></div>
				<div className={"mx-auto mt-4 "}>
					<p style={{ textAlign: "center" }}>
						Meet the team that makes the process of this system fast
						and painless as possible to provide you with good result
					</p>
				</div>
				<div className={classes.mainWrapper}>
					<img
						className={classes.thirdThumbnail}
						src={grayed_cardboard}
					></img>
					<img
						className={classes.secondaryThumbnail}
						src={grayed_cardboard}
					></img>
					<img
						className={classes.mainThumbnail}
						src={colored_cardboard}
					></img>
					<img
						className={classes.secondaryThumbnail}
						src={grayed_cardboard}
					></img>
					<img
						className={classes.thirdThumbnail}
						src={grayed_cardboard}
					></img>
				</div>

				<NewsletterSection />
			</div>
		</div>
	);
};

export default MeetTheTeam;
