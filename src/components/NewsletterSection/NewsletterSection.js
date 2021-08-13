import classes from "./NewsletterSection.module.css";
import HeaderTextInfo from "../HeaderTextInfo/HeaderTextInfo";
import Button from "../Button/Button";

const NewsletterSection = () => {
	return (
		<div className={"container-fluid " + classes.newsLetterBackground}>
			<div className={classes.NLwrapper}>
				<HeaderTextInfo
					title="Subscribe our Newsletter"
					textFull="Subscribe to our newsletter for daily/weekly update of our products and services."
				/>
			</div>

			<div className={classes.inputSubmitWrapper}>
				<div className={classes.inputWrapper}>
					<input
						className={classes.inputNewsletter}
						type="textcolored"
						placeholder="EMAIL"
					></input>{" "}
				</div>

				<div className={classes.buttonWrapper}>
					<Button
						customStyle=""
						backgroundCol="color"
						text="DISCOVER"
					/>
				</div>
			</div>
		</div>
	);
};

export default NewsletterSection;
