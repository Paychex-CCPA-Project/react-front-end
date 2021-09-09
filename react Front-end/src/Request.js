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
        </div>
    );
}

export default Request;
