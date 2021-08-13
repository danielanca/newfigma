import classes from "./ArticleCardBoard.module.css";
import Button from "../Button/Button";
const ArticleCardBoard = (props) => {
	let style_CardPosition = "";
	switch (props.orderNo) {
		case "middle":
			style_CardPosition = classes.articleCard;
			break;
		case "left":
			style_CardPosition =
				classes.articleCardSmallLeft + "  " + classes.greyout;
			break;
		case "right":
			style_CardPosition = classes.articleCardSmallRight;
			break;
	}
	return (
		<div className={style_CardPosition}>
			<div className={"col-sm-12 " + classes.contentPadding}>
				<div className={"row " + classes.articleDate}>
					<span>19 JUNE, 2019 | BUSINESS</span>
				</div>
				<div className={"row "}>
					<h2 className={classes.articleHeaderText}>
						{props.articleTextHeader}
					</h2>
				</div>
				<div className={"row " + classes.articlePreviewText}>
					<span>
						Lorem ipsum dolor sit amet, magna habemus ius ad, qui
						minimum voluptaria in. Ad mei modus quodsi complectitur,
						postea...
					</span>
				</div>
				<div className="row">
					<Button
						customStyle="mt-4 "
						backgroundCol="color"
						text="Read More"
					/>
				</div>
			</div>
		</div>
	);
};

export default ArticleCardBoard;
