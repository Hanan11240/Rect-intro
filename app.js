import React from "react";
import ReactDOM from 'react-dom/client';

//Jsx ->babel transpiles it to react.createelement => reactelement->js objet -> htmlelement(render)
const jsxHeading = (<h1 id="heading">Json is html like syntax</h1>)


// React component

//React Functional component (a js function that return jsx(react element)) write componnet name in capital(first letter)
// const HeadingComponent = ()=>{
// return <h1>jsx returned</h1>
// }
const HeadingComponent = () => (
    <div id="container">
        <h1 className="heading">jsx returned</h1>
    </div>

)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);
