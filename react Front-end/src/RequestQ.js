
import React from "react";
import {Row} from "reactstrap";



function RequestQ(){

    return (
        <div>
                <Row className="required">
                    Please select one of the following.
                </Row>
                    <Row>
                        <input className="radioInput" type="radio"/> I am making this request on behalf of myself.
                    </Row>
                    <Row>
                        <input className="radioInput" type="radio"/> I am a legally qualified registered agent making this request for another.
                    </Row>
        </div>
    );
}

export default RequestQ;
