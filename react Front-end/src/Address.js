import React, {Component, useState} from "react";
import {  Row } from 'reactstrap';
import states from "./States";

function createselect(state){
    return (
        <option value={state.id}>{state.name}</option>
    );
}


class Address extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Address1: "",
            Address2: "",
        }
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(event){
        this.setState({
            Address1: event.target.value,
            Address2: event.target.value

        })
    }

    render() {

        return (
            <div>
                <th>
                    Address
                </th>
                <Row>
                    <span className="form-Adderess">
                        <input onChange={this.handleChange} className="address" type="text" required/>
                        <label>Address<span style={{color: "red"}}>*</span></label>
                    </span>
                    <span className="form-Adderess">
                        <input className="address" type="text"/>
                        <label>Address two</label>
                    </span>
                </Row>
                <Row>
                    <span className="form-City">
                        <input className="city" type="text"/>
                        <label>City</label>
                    </span>
                    <span className="#">
                        <label> state </label>
                        <select>
                            {states.map(createselect)}
                        </select>
                    </span>
                </Row>

            </div>

        );
    }

}

export default Address;
