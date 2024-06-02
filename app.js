import React from "react";
import ReactDOM from 'react-dom/client'



const Title =  function(){
   return (
        <h1>Title</h1>
    )
}

const HeadingComponent = ()=> (
    <div id="heading">
        <Title />
        <h1>This is heading component</h1>
    </div>
)


const root  = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent />)
