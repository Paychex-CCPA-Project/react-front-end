import React from "react";
import {Row,Col } from 'reactstrap';


function ReCAPTCHA(){

    return (
            <div>
                <Row  action="?" method="POST">

                    {/* Make the API call to google with the site key inorder to use the captcha */}
                    <div className="g-recaptcha" data-sitekey="6Lf5L1AcAAAAAN8BwFvZHoNTyURSo7e-IuskSdBL" />
                </Row>
                <div className="col-auto my-1">
                    <button id="btn" type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>

    );
}

export default ReCAPTCHA;


