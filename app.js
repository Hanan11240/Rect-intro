import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import HeaderComponent from "./src/components/HeaderComponent";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./src/components/About";
// import ContactUs from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import UserContext from "./src/utils/UserContext";
// import Grocery from "./src/components/Grocery";





// chunking or
// lazy loading or
// dynamix bundling or
// code splitting

const Grocery = lazy(() => import("./src/components/Grocery"));
const About = lazy(() => import("./src/components/About"));
const ContactUs = lazy(() => import("./src/components/Contact"))
const AppLayout = () => {
    const [userInfo, setUserInfo] = useState();
    useEffect(() => {
        // make api call to get data;
        const data = {
            name: "Hanan"
        }
        setUserInfo(data.name);
    }, [])
    return (
        <UserContext.Provider  value={{loggedInUser:userInfo,setUserInfo}}>
            <div className="app">
                <HeaderComponent />
                <Outlet />

            </div>
        </UserContext.Provider>

    )
}
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <Suspense fallback={<h1>Loading...</h1>}>
                    <About />
                </Suspense>

            },
            {
                path: '/contact-us',
                element: <Suspense fallback={<h1>Loading...</h1>}>
                    <ContactUs />
                </Suspense>
            },
            {
                path: '/grocery',
                element: <Suspense fallback={<h1>Loading...</h1>}>
                    <Grocery />
                </Suspense>
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    },

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);


