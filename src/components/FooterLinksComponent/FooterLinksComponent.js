import classes from "../FooterLinksComponent/FooterLinksComponent.module.css";

const FooterLinksComponent = (props) => {
	return (
		<ul className={classes.LinksFooter}>
			<div className={classes.titleLinkWrapper}>
				<span className={classes.LinksFooterTitle}>
					{props.footerTitle}
				</span>
			</div>

			<li className={classes.linkItem}>Home</li>
			<li className={classes.linkItem}>About us</li>
			<li className={classes.linkItem}>Blog</li>
			<li className={classes.linkItem}>Sell</li>
			<li className={classes.linkItem}>Contact Us</li>
		</ul>
	);
};
export default FooterLinksComponent;
