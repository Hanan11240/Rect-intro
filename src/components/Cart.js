import { useDispatch, useSelector } from "react-redux";
import MenuList from  './MenuList'
import { clearCart } from "../utils/cartSlice";
const Cart  =()=>{
    const cartItems = useSelector(store => store.cart.items )
    const dispatch = useDispatch();
    const handleClear =()=>{
       
        dispatch(clearCart())
    }
    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
            <button className="p-2 m-2 bg-black text-white rounded-lg" 
            onClick={handleClear}>Clear Cart</button>
            {cartItems.length === 0 && <h1>Cart is empty add items to the cart!</h1>}
                <MenuList items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;
