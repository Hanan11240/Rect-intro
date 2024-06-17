import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
// import {MENU_URL} from '../utils/constants'
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const  [showIndex,setShowIndex] = useState(null)

    if (resInfo === null)
        return <Shimmer />
    const { name, cuisines } = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(category => category?.card?.card?.['@type'] == 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(',')}</p>
            {categories.map((category,index)=>
            // controlled component (parent is controlling it)
                <RestaurantCategory key={category?.card?.card?.title}
                 data={category?.card?.card}
                 showItem={index === showIndex ? true:false}
                 setShowIndex = {()=> setShowIndex(index)}
                 />
            )}
        </div>
    )
}


export default RestaurantMenu;
