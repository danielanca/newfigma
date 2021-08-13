import classes from "./HugeCardBoard.module.css";
import Button from "../Button/Button";
import article1 from "../../media/blog_page/blog_article/article1.png";
const HugeCardBoard = (props) => {
	let imageThumbnail = props.imageSrc.default;
	let headerTitle = props.headerTitle;
	let fullText = props.fullText;

	return (
		<div className={"mx-auto " + classes.hugeCardBoard}>
			<img
				className={classes.thumbnailArticle}
				src={imageThumbnail}
			></img>
			<h2 className={classes.textHeaderHuge}>{headerTitle}</h2>
			<p className={classes.ArticleParagraph}>19 June 2019 | BUSINESS</p>
			<div className={classes.fullTextHugeArticle}>
				<p className={classes.ArticleParagraph}>{fullText}</p>
			</div>
			<div className={classes.buttonArticle}>
				<Button text="Discover" backgroundCol="colored" />
			</div>
		</div>
	);
};

export default HugeCardBoard;
