import React from "react";
import ReactDOM from 'react-dom/client';
import  HeaderComponent  from "./src/components/HeaderComponent";
import Body from "./src/components/Body";







// dont use index as key 


const AppLayout = () => {
    return (
        <div className="app">
            <HeaderComponent />
            <Body />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);


