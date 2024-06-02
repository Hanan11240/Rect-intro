import React from "react";
import ReactDOM from 'react-dom/client';


const Title = ()=>(<h1 id="heading">Json is html like syntax</h1>)

//componet composition
const HeadingComponent = () => (
    <div id="container">
       {Title()}
       <Title />
       <Title></Title>
        <h1 className="heading">jsx returned</h1>
    </div>

)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);


