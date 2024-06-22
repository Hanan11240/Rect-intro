import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => { // you can destructure {resName,cuisine}
    const {resData}  = props;
    const {name,cuisines,avgRating,costForTwo,} = resData?.info;
    const { deliveryTime} = resData?.info?.sla
     return (
         <div data-testid="resCard" className="m-4 p-4 w-52 w-[220px] bg-gray-100 hover:bg-gray-200" >
             <img className="rounded-lg" src={CDN_URL + resData.info.cloudinaryImageId} alt="res-logo" />
             <h3 className="font-bold py-2 text-lg">{name}</h3>
             <h4>{cuisines.join(', ')}</h4>
             <h4>{avgRating} stars</h4>
             <h4>{costForTwo}</h4>
             <h4>{deliveryTime} mins</h4>
         </div>
     )
 }

 export const withPromotedLabel = (RestaurantCard)=>{
    return (props) =>{
        return (
            <div>
                <label className="absolute bg-slate-800 px-2 rounded text-white">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
 }
 export default RestaurantCard;
