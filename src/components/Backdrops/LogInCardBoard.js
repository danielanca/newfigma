import Button from "../Button/Button";
import classes from "./Backdrops.module.css";

const LogInCardBoard = () => {
	return (
		<div className={classes.backgroundBackdrop}>
			<div>
				<p className={classes.messageHead}>Welcome back </p>
				<p className={classes.textDesc}>
					Kindly fill in your login details to proceed
				</p>
			</div>
			<div className={classes.inputWrapperAuth}>
				<input
					className={classes.inputEmail}
					type="text"
					id="fname"
					name="firstname"
					placeholder="Email"
				></input>
				<input
					className={classes.inputPassword}
					type="text"
					id="fname"
					name="firstname"
					placeholder="Password"
				></input>
				<div>
					<p className={classes.forgotPassText}>
						I forgot my password?
					</p>
				</div>
				<div className={classes.buttonMiddle}>
					<Button backgroundCol={"colored"} text={"Login"}></Button>
				</div>
				<div className={classes.signUpParagraph}>
					<p>
						Don’t have an account yet?{" "}
						<a href={"/signup"}>Sign Up </a>{" "}
					</p>
				</div>
			</div>
		</div>
	);
};

export default LogInCardBoard;
