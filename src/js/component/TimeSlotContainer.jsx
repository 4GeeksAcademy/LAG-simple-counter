import React from "react";
import { TimeSlot } from "./TimeSlot.jsx";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";
import { AiOutlineClockCircle } from "react-icons/ai";



/*
Create a seconds-counter component, called SecondsCounter. It should look like this one.

The whole purpose of the component is to display how many seconds have passed since the website finished loading (onLoad).
Use the ReactDOM.render() to render the component into the web-app.
Use the setInterval() function to re-render the component on every second.
The component does not need a local state, you can pass the number of seconds as props like this:
<SecondsCounter seconds={3434} />

*/

function TimeSlotContainer(props) {
    return (
        <div className="d-flex" >
            
            <TimeSlot count={props.count} digit={1} />
            <TimeSlot count={props.count} digit={2}/>
            <TimeSlot count={props.count} digit={3}/>
            <TimeSlot count={props.count} digit={4}/>
        </div>
        //props.count

    );
}


export default TimeSlotContainer;

