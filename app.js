import React from "react";
import ReactDOM from 'react-dom/client';

const heading  = React.createElement('h1',{id:"heading"},"This is children");

// JSX - Html like or Xml like syntax;
console.log('heading',heading)
const jsxHeading = <h1 id="heading">Json is html like syntax</h1>
console.log('jsonHeading',jsxHeading)
const root  = ReactDOM.createRoot(document.getElementById('root'));
root.render(jsxHeading);
