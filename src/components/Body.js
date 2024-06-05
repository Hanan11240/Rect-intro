import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resData from '../utils/mockData'
const Body = () => {
    const [ListOfRestaurants,setListOfRestaurants] = useState(resData);
        
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                    onClick={()=>{
                        const filteredList = ListOfRestaurants.filter((restaurant)=> restaurant?.info?.avgRating > 4);
                       setListOfRestaurants(filteredList);
                       console.log(filteredList)

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
