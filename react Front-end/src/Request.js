import React from "react";
import {Row} from "reactstrap";
import requestCheck from "./requesstCheck";


// this function will create a new check box element with a label
// the array for request check can be found at requestCheck.js
function createCheck(request){
    return (
        <Row>
            <input type={request.type} id={request.id} required/>
            <label className={request.class} >{request.name}</label>
        </Row>
    );
}

// ----------------------------------------------------------
// this function will render the jsx tags
function Request(){

    return (
        <div>
            <th>
                Request Type
            </th>
            {/* */}
            <Row className="required">
                Please select the reason(s) for this request.
            </Row>
            {/* this is where the map function is called and will render the elements */}
            {requestCheck.map(createCheck)}
        </div>
    );
}

export default Request;
