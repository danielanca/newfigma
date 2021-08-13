import "./App.css";
import Homepage from "./FrontPages/Homepage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutPage from "./FrontPages/AboutPage";
import BlogPage from "./FrontPages/BlogPage";
import ContactUs from "./FrontPages/ContactUs";
import BlogPageContent from "./FrontPages/BlogPageContent";
import LogInCardBoard from "./components/Backdrops/LogInCardBoard";
import SignUpCardBoard from "./components/Backdrops/SignUpCardBoard";
import GiftCardBoard from "./components/Backdrops/GiftCardBoard";
import SellBitcoin from "./components/Backdrops/SellBitcoin";
import ProceedDialogCoin from "./components/Backdrops/ProceedDialogCoin";
function App() {
	return (
		<Router>
			<Switch>
				<Route path="/home">
					<Homepage />
				</Route>
				<Route path="/about">
					<AboutPage />
				</Route>
				<Route path="/blog">
					<BlogPage />
				</Route>
				<Route path="/contactus">
					<ContactUs />
				</Route>
				<Route path="/article">
					<BlogPageContent />
				</Route>
				<Route path="/login">
					<LogInCardBoard />
				</Route>
				<Route path="/signup">
					<SignUpCardBoard />
				</Route>
				<Route path="/giftcard">
					<GiftCardBoard />
				</Route>
				<Route path="/sellbitcoin">
					<SellBitcoin />
				</Route>
				<Route path="/proceed">
					<ProceedDialogCoin Name={"Ethereum"} outSum={"20"} />
				</Route>
				<Route path="/proceed2">
					<ProceedDialogCoin Name={"OthersCard"} outSum={"20"} />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
