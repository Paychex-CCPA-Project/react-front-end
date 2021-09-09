import React from "react";
import {Row,Col } from 'reactstrap';


function ReCAPTCHA(){

    return (
            <div>
                <Row  action="?" method="POST">

                    {/* Make the API call to google with the site key inorder to use the captcha */}
                    <div className="g-recaptcha" data-sitekey="6Lf5L1AcAAAAAN8BwFvZHoNTyURSo7e-IuskSdBL" />
                    <input className="captcha" type="submit" value="Submit"/>


                </Row>
            </div>

    );
}

export default ReCAPTCHA;


