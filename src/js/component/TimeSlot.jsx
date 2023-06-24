import React from "react"; //Main React.js library



// only update the value of this array
export const TimeSlot = ({ count, digit }) => {
    //return (null);
    return (
        <div style={{ border: '1px solid red' }}>
            {
                count.toString().slice(digit - 1, digit)

            }
        </div>

    );
}
