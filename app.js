import React from "react";
import ReactDOM from 'react-dom/client';
import HeaderComponent from "./src/components/HeaderComponent";
import Body from "./src/components/Body";
import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import About from "./src/components/About";
import ContactUs from "./src/components/Contact";
import Error from "./src/components/Error";





// dont use index as key 


const AppLayout = () => {
    return (
        <div className="app">
            <HeaderComponent />
            <Body />
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement:<Error />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path:'/contact-us',
        element:<ContactUs />
    }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);


