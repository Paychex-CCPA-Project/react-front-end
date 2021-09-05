import './App.css';
import React from "react";
import {  Row } from 'reactstrap';



function Personal(){

    return (
        <div>
        <th>
            <Row>
                Personal Details
            </Row>
        </th>
    <Row>
                          <span className="form-group">
                              <input className="personals" type="text"/>
                              <label>First Name</label>
                          </span>
        <span className="form-group">
                              <input className="personals" type="text"/>
                              <label>Middle Name</label>
                          </span>
        <span className="form-group">
                              <input className="personals" type="text"/>
                              <label>Last Name</label>
                          </span>
    </Row>
    <Row>
        <input className="personals" type="text" placeholder="Date of Birth" />
        <input className="SSN" type="text" placeholder="Last Four Digits of SSN"/>
    </Row>
        </div>
    );
}

export default Personal;
