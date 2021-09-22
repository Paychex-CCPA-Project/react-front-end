import React from "react";
import {Row} from "reactstrap";

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
            <Row>
                <input type="CHECKBOX" id="requstCheck" required/>
                <label className="requestLabel" >Personal data report</label>
            </Row>
                <input type="CHECKBOX"id="requstCheck" required/>
                <label className="requestLabel">Personal data retrieval</label>
                <Row>
                <input type="CHECKBOX" id="requstCheck" required/>
                <label className="requestLabel">Personal data purge</label>
        </Row>
        </div>
    );
}

export default Request;
