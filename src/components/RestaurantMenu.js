import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
// import {MENU_URL} from '../utils/constants'
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
    // const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    // useEffect(() => {
    //     fetchMenu();
    // }, []);
    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_URL +resId);
    //     const json = await data.json();

    //     setResInfo(json?.data)
    // }
    if (resInfo === null)
        return <Shimmer />
    const { name, cuisines } = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(category => category?.card?.card?.['@type'] == 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');
    console.log(categories)
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(',')}</p>
            {/* {categories.map(()=>{})} */}
        </div>
    )
}


export default RestaurantMenu;
