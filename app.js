import React from "react";
import ReactDOM from 'react-dom/client';

const elem = <span>Element</span>


const HeadingComponent = () => (
    <div id="container">
        <h1 className="heading">jsx returned</h1>
    </div>

)

const title = (<h1 id="heading">
    {elem}
    Json is html like syntax
    {/* this component should be usedinitialized before using it  */}
    <HeadingComponent />
    </h1>)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(title);


