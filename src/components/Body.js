import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {resData.map((restaurant) => (<RestaurantCard key={restaurant?.info?.id} resData={restaurant}/>))}
            </div>
        </div>
    )
}
export default Body;
