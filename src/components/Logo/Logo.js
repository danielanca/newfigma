import logo from "../../media/logo.png";

import "./Logo.css";

function redirect_link() {
    window.location.assign(window.location.origin + "/home");
}
const Logo = () => {
    return (
        <div onClick={redirect_link} className="logo-wrapper">
            {" "}
           
            <img className="logo-front" src={logo}></img>{" "}
        </div>
    );
};

export default Logo;
