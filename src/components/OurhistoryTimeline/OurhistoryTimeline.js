import classes from "./OurhistoryTimeline.module.css";

const OurhistoryTimeline = () => {
	return (
		<div className={"container-fluid " + classes.timelineBackground}>
			<div className={"row "}>
				<h2 style={{ textAlign: "center" }} className={"mx-auto "}>
					Our History
				</h2>
				<div className={"mx-auto " + classes.colorLine}></div>
			</div>
			<div className={classes.verticalTimeline}></div>
			<div
				className={classes.timeLinePoint + " " + classes.pointCoords1}
			></div>
			<div
				className={classes.timeLinePoint + " " + classes.pointCoords2}
			></div>
			<div
				className={classes.timeLinePoint + " " + classes.pointCoords3}
			></div>
			<div className={classes.itemTimelineWrapper}>
				<div className={classes.titleTimeline}>
					<span> May 2010</span>
				</div>
				<div className={classes.textTimeline}>
					<span>
						May 2017 Ut enim mi, mattis at sollicitudin rhoncus,
						Etcetcetc Etcetcetc Etcetcetc Etcetcetc Etcetcetc
						Etcetcetc
					</span>
				</div>
			</div>
			<div className={classes.itemTimelineWrapperSecond}>
				<div className={classes.titleTimeline}>
					<span> May 2010</span>
				</div>
				<div className={classes.textTimeline}>
					<span>
						May 2010 Ut enim mi, mattis at sollicitudin rhoncus,
						rhoncus eget sem. Curabitur aliquam tellus eu nisl
						suscipit, at vestibulum ex rutrum. Nulla facilisi. Cras
						ullamcorper pellentesque orci, nec vestibulum
						nibh.uspendisse
					</span>
				</div>
			</div>
			<div className={classes.itemTimelineWrapperThird}>
				<div className={classes.titleTimeline}>
					<span> May 2010</span>
				</div>
				<div className={classes.textTimeline}>
					<span>
						May 2010 Ut enim mi, mattis at sollicitudin rhoncus,
						rhoncus eget sem. Curabitur aliquam tellus eu nisl
						suscipit, at vestibulum ex rutrum. Nulla facilisi. Cras
						ullamcorper pellentesque orci, nec vestibulum
						nibh.uspendisse
					</span>
				</div>
			</div>
		</div>
	);
};

export default OurhistoryTimeline;
