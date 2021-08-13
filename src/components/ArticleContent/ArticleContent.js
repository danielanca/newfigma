import classes from "./ArticleContent.module.css";
import fb_icon from "../../media/blog_content/facebook_icon.png";
import twitter_icon from "../../media/blog_content/twitter_icon.png";
import youtube_icon from "../../media/blog_content/youtube_icon.png";
const ArticleContent = (props) => {
	return (
		<div className={classes.whitePaper}>
			<p className={classes.centeredContent}> {props.fullContent}</p>
			<div className={classes.endTagsWrapper}>
				<div className={"row"}>
					<div className={"col-sm-6"}>
						<div className={classes.tagItem}>
							<h2 className={classes.tagText}>
								Tags: Dani, Anca,Finance
							</h2>
						</div>
					</div>
					<div className={"col-sm-6"}>
						<p>
							Share with{" "}
							<img
								style={{
									marginLeft: "10px",
									height: "30px",
									width: "30px",
								}}
								src={fb_icon}
							></img>
							<img
								style={{
									marginLeft: "10px",
									height: "30px",
									width: "30px",
								}}
								src={twitter_icon}
							></img>
							<img
								style={{
									marginLeft: "10px",
									height: "30px",
									width: "30px",
								}}
								src={youtube_icon}
							></img>
						</p>
					</div>
				</div>
				<div className={"row"}>
					<div className={"col-sm-6"}>
						<h2 className={classes.backSimilarPage}>
							How to sell your iTUNES Cards with us
						</h2>
						<p className={classes.prevNextPostButton}>Prev post</p>
					</div>
					<div className={"col-sm-6"}>
						<h2 className={classes.nextSimilarPage}>
							Exchange in Bitcoins and win free CAR
						</h2>
						<p className={classes.prevNextPostButton}>Next Post</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ArticleContent;
