import './App.css';
import React from "react";
import {  Row } from 'reactstrap';
function Address(){
    return (
        <div>
            <th>
                Address
            </th>
            <Row>
                <span className="form-Adderess">
                    <input className="address" type="text"/>
                    <label>Address</label>
                </span>
                <span className="form-Adderess">
                    <input className="address" type="text"/>
                    <label>Address two</label>
                </span>
            </Row>
            <Row>
                <span className="form-Adderess">
                    <input className="address" type="text"/>
                    <label>City</label>
                </span>
            </Row>

        </div>

    );
}

export default Address;
