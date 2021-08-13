import Button from "../Button/Button";
import classes from "./ContactFormSection.module.css";
const ContactFormSection = (props) => {
	return (
		<div className={"container-fluid " + classes.contactFormSection}>
			<div className="row">
				<div className={classes.centerText}>
					<div className={classes.titleHeaderWrapper}>
						<h2>{props.titleForm}</h2>
					</div>

					<div className={classes.spanText}>
						<span>{props.informativeText}</span>
					</div>
				</div>
			</div>
			<div className={classes.inputWrapper}>
				<div className="row">
					<div className={"col-md-6 " + classes.nameComponent}>
						<label for="fname">First Name</label>
						<input
							type="text"
							id="fname"
							name="firstname"
							placeholder="Your name.."
						></input>
					</div>
					<div className={"col-md-6 " + classes.emailComponent}>
						<label for="fname">First Name</label>
						<input
							type="text"
							id="fname"
							name="email"
							placeholder="Enter your email..."
						></input>
					</div>
					<div className={"col-md-12 " + classes.messageComponent}>
						<label for="fname">First Name</label>
						<input
							style={{ height: "230px" }}
							cols="40"
							rows="5"
							type="text"
							id="messageForm"
							placeholder="Your message..."
						></input>
					</div>
				</div>
			</div>
			<div className={"row " + classes.buttonWrapper}>
				<Button text={"PUBLISH"} backgroundCol={"colored"}></Button>{" "}
			</div>
			<div className={"row"}></div>
		</div>
	);
};

export default ContactFormSection;
