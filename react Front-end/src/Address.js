import React from "react";
import states from "./States";
import addressInfo from "./addressInfo";

/// Map functions. File with arrays is addressInfo.js
//file with states array is states.js

// returns another state option within the drop selection menu
function createSelect(state){
    return (
        <option value={state.id}>{state.name}</option>
    );
}
// returns the map for the elements within the address component
function createAddress(ad){
    return(
        <span className={ad.class}>
            <input className={ad.id} type="text" required/>
            <label>{ad.name}<span style={{color: "red"}}>*</span></label>
        </span>
    );
}

// ----------------------------------------------------------
function Address()  {
        return (
            <div>
                <th>
                    Address
                </th>
                    {addressInfo.map(createAddress)}
                    <label style={{color: "black"}} htmlFor="statesSelect">State</label>
                    <select name="statesSelect" id="statesSelect">
                        {states.map(createSelect)}
                    </select>
            </div>

        );
}

export default Address;
