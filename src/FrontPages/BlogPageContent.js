import NavBar from "../components/NavBar/NavBar";
import HeroBlog from "../components/HeroBlog/HeroBlog";
import ArticleContent from "../components/ArticleContent/ArticleContent";
import blogPreviewPic from "../media/blog_content/IMG.png";
import ContactFormSection from "../components/ContactForm/ContactFormSection";
import FooterSection from "../components/Footer/FooterSection";
const BlogPageContent = () => {
	return (
		<div>
			<NavBar />
			<HeroBlog
				titleHeader={
					"ETH TO NAIRA EXCHANGE RATE IS NOW #400 PER Transactions"
				}
				backgroundImage={blogPreviewPic}
			/>
			<ArticleContent
				fullContent={
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
				}
			/>

			<ContactFormSection
				titleForm={"Leave a comment"}
				informativeText={
					"Your email address will not be published. Required fields are marked *"
				}
			/>
			<FooterSection />
		</div>
	);
};

export default BlogPageContent;
