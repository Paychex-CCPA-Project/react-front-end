import React from "react";
import $ from 'jquery'
import {  Row } from 'reactstrap';


const Personal=() =>{

    $('.palceholder').click(function() {
        $(this).siblings('input').focus();
    });
    $('.form-control').focus(function() {
        $(this).siblings('.palceholder').hide();
    });
    $('.form-control').blur(function() {
        var $this = $(this);
        if ($this.val().length === 0)
            $(this).siblings('.palceholder').show();
    });
    $('.form-control').blur();


    return (
        <div>
        <th>
            <Row>
                Personal Details
            </Row>
        </th>
            <form className="form-inline">
                <div className="form-group mb-2">
                    <input type="text" className="form-control" id="inputPassword2" placeholder="First Name"/>
                </div>
                <div className="form-group mb-2">
                    <input type="text" className="form-control" id="inputPassword2" placeholder="Middle Name"/>
                </div>
                <div className="form-group mb-2">
                    <input type="text" className="form-control" id="inputPassword2" placeholder="Last Name"/>
                </div>
            </form>

        </div>

    );

}
Personal.defaultProps = {

}
export default Personal;
