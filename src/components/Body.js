import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState,useContext } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [ListOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();

        const list = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurants(list);
        setFilteredRestaurants(list);
    };

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) return <h>Looks like you are offline</h>;
    const {setUserInfo,loggedInUser}  = useContext(UserContext)
    return ListOfRestaurants?.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex items-center">
                <div className="search m-4 p-4">
                    <input 
                        type="text" 
                        className="border border-solid border-black" 
                        value={searchText} 
                        onChange={(e) => setSearchText(e.target.value)} 
                    />
                    <button 
                        className="px-4 py-2 mx-4 shadow-md bg-green-100 rounded-md" 
                        onClick={() => {
                            const filteredList = ListOfRestaurants.filter((restaurant) => 
                                restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestaurants(filteredList);
                        }}
                    >
                        Search
                    </button>
                </div>
                <div>
                    <button 
                        className="px-4 py-2 mx-4 shadow-md bg-gray-100 rounded-md"
                        onClick={() => {
                            const filteredList = ListOfRestaurants?.filter((restaurant) => restaurant?.info?.avgRating > 4);
                            setFilteredRestaurants(filteredList);
                        }}
                    >
                        Top rated button
                    </button>
                </div>
                <div>
                    <label className="mx-1">User Name: </label>
                   <input className="border border-black" value={loggedInUser} onChange={(e)=>setUserInfo(e.target.value)}/>
                </div>
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurants?.map((restaurant) => (
                    <Link to={"/restaurant/" + restaurant?.info?.id} key={restaurant?.info?.id}>
                        {/* <RestaurantCard resData={restaurant} /> */}
                        {restaurant?.info?.isOpen ? (
                            <RestaurantCardPromoted resData={restaurant} />
                        ) : (
                            <RestaurantCard resData={restaurant} />
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
