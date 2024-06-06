import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
const Body = () => {
    const [ListOfRestaurants,setListOfRestaurants] = useState([]);
       
    useEffect(()=>{
       fetchData();
    },[])

    const fetchData = async()=>{
        const data  = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();

        const list  = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurants(list);
    }

    if(ListOfRestaurants.length ===0){
        return <Shimmer />
    }
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                    onClick={()=>{
                        const filteredList = ListOfRestaurants.filter((restaurant)=> restaurant?.info?.avgRating > 4);
                       setListOfRestaurants(filteredList);
                       
                    }}
                >Top rated button</button>
            </div>
            <div className="res-container">
                {ListOfRestaurants.map((restaurant) => (<RestaurantCard key={restaurant?.info?.id} resData={restaurant} />))}
            </div>
        </div>
    )
}
export default Body;
