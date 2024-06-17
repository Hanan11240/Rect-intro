import { useState } from "react";
import MenuList from "./MenuList";

const RestaurantCategory = ({data,showItem,setShowIndex})=>{
  
    // console.log(data);
    const handleClick = ()=>{
        setShowIndex()
    }
    return (
        <div >
             {/* header */}
            <div className="w-6/12 mx-auto my-2  bg-gray-50 shadow-lg p-4">
            <div className="flex justify-between cursor-pointer " onClick={handleClick}>
            <span className="font-bold">{data.title} ({data?.itemCards?.length})</span>
            <span>⬇</span>
            </div>
            { showItem && <MenuList  items={data?.itemCards}/> }
            </div>
            
        </div>
    )
}

export default RestaurantCategory;
