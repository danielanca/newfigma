import NavBar from "../components/NavBar/NavBar";
import HeroHeader from "../components/Hero/HeroHeader";
import blogHeader from "../media/blog_page/blog_header.png";
import FillableSectionWithPage from "../components/FillableSectionWithPage/FillableSectionWithPage";
import HugeCardBoard from "../components/HugeCardBoards/HugeCardBoard";
import articlePic1 from "../media/blog_page/blog_article/article1.png";
import articlePic2 from "../media/blog_page/blog_article/article2.png";
import articlePic3 from "../media/blog_page/blog_article/article3.png";

import ArticlesBlog from "../ArticlesData/ArticlesBlog";
import FooterSection from "../components/Footer/FooterSection";
const BlogPage = () => {
	return (
		<div>
			<NavBar></NavBar>
			<HeroHeader
				imageSrc={blogHeader}
				headerTitle="Stay updated,  never miss a post"
				headerDescription="CoinBase is a platform for trading your bitcoin and giftcard at the best rate, why not give us a trial."
			/>
			<FillableSectionWithPage>
				<HugeCardBoard
					imageSrc={ArticlesBlog[0].imageHeader}
					headerText={ArticlesBlog[0].headerTitle}
					fullText={ArticlesBlog[0].fullDescription}
				/>
				<HugeCardBoard
					imageSrc={ArticlesBlog[1].imageHeader}
					headerText={ArticlesBlog[1].headerTitle}
					fullText={ArticlesBlog[1].fullDescription}
				/>
				<HugeCardBoard
					imageSrc={ArticlesBlog[2].imageHeader}
					headerText={ArticlesBlog[2].headerTitle}
					fullText={ArticlesBlog[2].fullDescription}
				/>
			</FillableSectionWithPage>
			<FooterSection></FooterSection>
		</div>
	);
};

export default BlogPage;
