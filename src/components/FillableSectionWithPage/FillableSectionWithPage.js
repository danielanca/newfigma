import classes from "./FillableSectionWithPage.module.css";
const FillableSectionWithPage = (props) => {
	return (
		<div className={"container-fluid "}>
			{props.children}

			<div className={classes.PageContainer + " d-flex flex-row "}>
				<div className={classes.pageItem + " " + classes.Active}>
					<div className={classes.numberItem}>1</div>
				</div>
				<div className={classes.pageItem + " " + classes.Inactive}>
					<div className={classes.numberItem}>1</div>
				</div>
				<div className={classes.pageItem + " " + classes.Inactive}>
					<div className={classes.numberItem}>1</div>
				</div>
				<div className={classes.pageItem + " " + classes.Inactive}>
					<div className={classes.numberItem}>...</div>
				</div>
				<div className={classes.pageItem + " " + classes.Inactive}>
					<div className={classes.numberItem}>99</div>
				</div>
			</div>
		</div>
	);
};

export default FillableSectionWithPage;
