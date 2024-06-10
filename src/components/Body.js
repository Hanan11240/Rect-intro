import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
const Body = () => {
    const [ListOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();

        const list = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurants(list);
        setFilteredRestaurants(list);
    }
    //conditional rendering
    // if(ListOfRestaurants.length ===0){
    //     return <Shimmer />
    // }
    return ListOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                            setSearchText(e?.target?.value);
                    }} />
                    <button onClick={() => {
                       const filteredList = ListOfRestaurants.filter((restaurant)=>restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
                       setFilteredRestaurants(filteredList);
                    }}>Search</button>
                </div>
                <button className="filter-btn"
                    onClick={() => {
                        const filteredList = ListOfRestaurants.filter((restaurant) => restaurant?.info?.avgRating > 4);
                        setListOfRestaurants(filteredList);

                    }}
                >Top rated button</button>
            </div>
            <div className="res-container">
                {filteredRestaurants.map((restaurant) => (<RestaurantCard key={restaurant?.info?.id} resData={restaurant} />))}
            </div>
        </div>
    )
}
export default Body;
