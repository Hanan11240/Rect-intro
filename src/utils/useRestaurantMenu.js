import { useEffect, useState } from "react";
import {MENU_URL} from './constants'
const useRestaurantMenu = (resId) => {
    console.log('custom hook')
    const [resInfo,setResInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
    }, [])
    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        setResInfo(json.data);
        
    }
    return resInfo;
}

export default useRestaurantMenu;
