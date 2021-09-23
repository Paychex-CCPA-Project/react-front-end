import React from "react";
import {Row} from "reactstrap";
import contactInfo from "./contactInfo";

// this function maps the contacts section
// file with contact array is in contactInfo.js
function creatContact(contact){

    return(
        <span className="form-Adderess">
            <input className={contact.id} type="text" required/>
            <label>{contact.name}<span style={{color: "red"}}>*</span></label>
        </span>
    );
}


// ----------------------------------------------------------
// this function will render the jsx tags
function Contact(){

    return(
        <div>
            <th>
                Contact
            </th>
            <Row>
                {/* this is where the map function is called and will render the elements */}
                {contactInfo.map(creatContact)}
            </Row>
        </div>
    );
}

export default Contact;
