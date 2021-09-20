import React, {Component} from "react";
import {Row} from "reactstrap";


class Contact extends Component{
    state = {
        PhoneNumber: "",
        EmailAddress: "",
    }

render(){

    return(
        <div>
            <th>
                Contact
            </th>
            <Row>
                <span className="form-Adderess">
                    <input className="address" type="text" required/>
                    <label>Phone Number</label>
                </span>
                <span className="form-Adderess">
                    <input className="address" type="text" required/>
                    <label>Email Address</label>
                </span>
            </Row>
        </div>
    );
    }
}

export default Contact;
