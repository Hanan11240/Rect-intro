import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const HeaderComponent = () => {
    const [buttonName,setButtonName] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button onClick={()=>{
                      buttonName === "Login" ? setButtonName('Logout'):setButtonName("Login");
                    }} className="login">{buttonName}</button>
                </ul>
            </div>
        </div>
    );
}


export default HeaderComponent;
