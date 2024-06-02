import React from "react";
import ReactDOM from 'react-dom/client';

const elem = <span>Element</span>
const title = (<h1 id="heading">
    {elem}
    Json is html like syntax
    </h1>)

const HeadingComponent = () => (
    <div id="container">
        {title}
        <h1 className="heading">jsx returned</h1>
    </div>

)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);


