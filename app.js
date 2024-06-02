import React from "react";
import ReactDOM from 'react-dom/client';


const title = (<h1 id="heading">Json is html like syntax</h1>)

const HeadingComponent = () => (
    <div id="container">
        {title}
        <h1 className="heading">jsx returned</h1>
    </div>

)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);


