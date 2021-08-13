import classes from "./OurBlogSection.module.css";
import HeaderText from "../TextCustom/HeaderText";
import ArticleCardBoard from "../CardBoard/ArticleCardBoard";
import lineCS from "../common/headerLine.module.css";
import CarouselGallery from "../CarouselGallery/CarouselGallery";

const OurBlogSection = () => {
	return (
		<div className={classes.blogBackground + " mt-5 container-fluid "}>
			<div className="row">
				<HeaderText customBootstrap="mx-auto mt-5 " text="Our blog" />
			</div>
			<div className="row  ">
				<div className={"mx-auto " + lineCS.smallLine}></div>
			</div>
			<div className="row">
				<span className={"mx-auto mt-2 " + classes.textDesc}>
					Get to know the latest stuff via our blog post.
				</span>
			</div>
			<div className="row">
				<div className="col-sm-12">
					<CarouselGallery>
						<ArticleCardBoard
							orderNo="middle"
							articleTextHeader="Heavenly Day"
						/>
						<ArticleCardBoard
							orderNo="left"
							articleTextHeader="Whisper to us"
						/>
						<ArticleCardBoard
							orderNo="right"
							articleTextHeader="Get lost again"
						/>
					</CarouselGallery>
				</div>
			</div>
		</div>
	);
};

export default OurBlogSection;
