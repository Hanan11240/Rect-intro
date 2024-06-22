import { useEffect, useState,useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const HeaderComponent = () => {
    const [buttonName, setButtonName] = useState("Login");
    const {loggedInUser} = useContext(UserContext);
    // subbscribing to the store using  selector
    const cart = useSelector((store)=> store.cart.items);
    // if no dependency array. useEffect is called on every render;
    // if dependency array is empty then useEffect is called on initial rendered;
    // if denpendency array is [buttonName] then useEffect will b called whenever buttonName changes;
    useEffect(() => {
    }, [buttonName])
    return (
        <div className="flex justify-between  bg-slate-300 shadow-lg lg:bg-gray-200">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL} />
            </div>
            <div className="flex items-center ">
                <ul className="flex p-4 m-4">
                    <li className="px-3">
                        <Link to="/">
                            Home
                        </Link>


                    </li>
                    <li className="px-3">
                        <Link to="/about">About us</Link>
                    </li>
                    <li className="px-3">
                        <Link to="/contact-us">Contact us</Link>
                    </li>
                    <li className="px-3">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-3 text-xl">
                    <Link to="/cart">🛒 ({cart.length} items)</Link>
                    </li>
                    <button onClick={() => {
                        buttonName === "Login" ? setButtonName('Logout') : setButtonName("Login");
                    }} className="bg-green-100 px-2 rounded-md">{buttonName}</button>
                    
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
}


export default HeaderComponent;
