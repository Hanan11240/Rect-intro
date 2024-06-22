import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import {addItem} from '../utils/cartSlice'
const MenuList = (props) => {
    const { items } = props
    const dispatch = useDispatch();
        const handleAddItem = (item)=>{
           
            dispatch(addItem(item))
        }
    return (
        <div>

            {items?.map(item => (
                <div key={item?.card?.info?.id} className="p-2 m-2 text-left justify-between border-gray-200 border-b-2 flex">
                    
                    <div className="w-9/12">
                        <div className="py-2 ">
                            <span className="font-bold"> {item?.card?.info?.name}</span>
                            <span> - ₹ {(item?.card?.info?.defaultPrice / 100) || (item?.card?.info?.price / 100)}</span>
                            <p className="text-xs">{item?.card?.info?.description}</p>
                        </div>
                    </div>
                    <div className="w-3/12  ">
                        <div className="absolute">
                            <button className="p-2 bg-white rounded shadow-lg " onClick={
                                
                                ()=>handleAddItem(item)
                                }>Add +</button>
                        </div>
                    <img className="w-full h-[100px] object-cover  p-2" src={CDN_URL + item?.card?.info?.imageId} />
                             
                    </div>

                </div>))}

        </div>
    )
}

export default MenuList;
