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
            <div className="container">
                <Row className="row">
                    <Row className="centered">
                        <form>
                            <Row className="form-group name-group">
                                <Row className="palceholder">
                                    <label htmlFor="name">Name</label>
                                    <span className="star">*</span>
                                </Row>
                                <input type="text" className="form-control" id="name" required/>
                            </Row>
                            <Row className="form-group email-group">
                                <Row className="palceholder">
                                    <label htmlFor="email">Email </label>
                                    <span className="star">*</span>
                                </Row>
                                <input type="email" className="form-control" id="email" required/>
                            </Row>
                    </form>
                    </Row>
                </Row>
            </div>

        </div>

    );

}
Personal.defaultProps = {

}
export default Personal;
