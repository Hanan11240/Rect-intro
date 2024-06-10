import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
const HeaderComponent = () => {
    const [buttonName,setButtonName] = useState("Login");
    // if no dependency array. useEffect is called on every render;
    // if dependency array is empty then useEffect is called on initial rendered;
    // if denpendency array is [buttonName] then useEffect will b called whenever buttonName changes;
    useEffect(()=>{
        console.log("use Effect called");
    },[buttonName])
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
