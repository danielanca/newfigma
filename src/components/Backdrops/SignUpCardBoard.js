import Button from "../Button/Button";
import classes from "./Backdrops.module.css";

const SignUpCardBoard = () => {
	return (
		<div className={classes.back}>
			<div className={classes.backgroundBackdrop}>
				<div>
					<p className={classes.messageHead}>Sign Up </p>
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
						placeholder="Full Name"
					></input>
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
					<input
						className={classes.inputPassword}
						type="text"
						id="fname"
						name="firstname"
						placeholder="Cofirm Password"
					></input>

					<div className={classes.buttonMiddle}>
						<Button
							backgroundCol={"colored"}
							text={"Sign up"}
						></Button>
					</div>
					<div className={classes.signUpParagraph}>
						<p>
							Already a member?
							<a
								className={classes.loginAdvice}
								href={"https://nomorecoffeeplease.com/"}
							>
								Log in
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUpCardBoard;
