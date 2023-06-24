//import react into the bundle
import React, { useState } from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
//import Home from "./component/home.jsx";
import TimeSlotContainer from "./component/TimeSlotContainer.jsx";

//render your react application
let count=0;

setInterval(()=>{
 
    ReactDOM.render(<TimeSlotContainer count={count}/>, document.querySelector('#app'))
    console.log ('q');
    count=count+1;

},1000)

