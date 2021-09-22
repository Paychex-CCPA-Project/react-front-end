import React from "react";
import "./styles/personal.css"
import personalData from "./personalData";
import {  Row } from 'reactstrap';

// this function will map create tags automatically depeanding on how many inputs there are
/// Map functions. File with arrays is personalData.js

// returns personal html tag for the personal tabel data
function createPersonal(pd){
    return(
        <span className="form-personal">
            <input className={pd.id} type={pd.type} required/>
            <label>{pd.name}<span style={{color: "red"}}>*</span></label>
        </span>
    );
}
// ----------------------------------------------------------


function Personal(){


    return (
        <div>
        <th>
            <Row>
                Personal Details
            </Row>
        </th>
            {personalData.map(createPersonal)}
        </div>

    );

}

export default Personal;
