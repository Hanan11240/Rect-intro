import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
// import {MENU_URL} from '../utils/constants'
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
    // const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    const  resInfo = useRestaurantMenu(resId);
    console.log(resInfo)
    // useEffect(() => {
    //     fetchMenu();
    // }, []);
    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_URL +resId);
    //     const json = await data.json();
        
    //     setResInfo(json?.data)
    // }
    if(resInfo === null)
        return <Shimmer />
    const {name,cuisines} = resInfo?.cards[2]?.card?.card?.info;
    console.log(resInfo)
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(',')}</h2>
            <ul>
                {itemCards.map((item)=><li key={item?.card?.info?.id}> {item?.card?.info?.name} </li>)}
            </ul>
        </div>
    )
}


export default RestaurantMenu;
