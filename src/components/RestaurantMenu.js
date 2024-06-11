import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import {MENU_URL} from '../utils/constants'
const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    useEffect(() => {
        fetchMenu();
    }, []);
    const fetchMenu = async () => {
        const data = await fetch(MENU_URL +resId);
        const json = await data.json();
        
        setResInfo(json?.data)
    }
    if(resInfo === null)
        return <Shimmer />
    const {name,cuisines} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(',')}</h2>
            <ul>
                {itemCards.map((item)=><li key={item?.card?.info?.id}>  </li>)}
            </ul>
        </div>
    )
}


export default RestaurantMenu;
