import React from "react";
import ReactDOM from 'react-dom/client';
import HeaderComponent from "./src/components/HeaderComponent";
import Body from "./src/components/Body";
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
import About from "./src/components/About";
import ContactUs from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";





// dont use index as key 


const AppLayout = () => {
    return (
        <div className="app">
            <HeaderComponent />
           <Outlet />
            
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children:[
            {
                path:'/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path:'/contact-us',
                element:<ContactUs />
            },{
                path:'/restaurant/:resId',
                element:<RestaurantMenu />
            }
        ],
        errorElement:<Error />
    },
    
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);


