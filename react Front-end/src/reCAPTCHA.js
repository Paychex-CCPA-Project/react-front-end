import React, {Component} from "react";
import {Row,Col } from 'reactstrap';


class ReCAPTCHA extends Component{
    state = {
        term:" ",
        seen: false
    }
    handleChange = event =>{
        this.setState({
            term: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    handleFormSubmit(term) {

    }

    render(){
    return (
            <div className="captchaDiv">
                <form onSubmit={this.handleSubmit}>
                <Row  action="?" method="POST">
                    {/* Make the API call to google with the site key inorder to use the captcha */}
                    <div className="center">
                    <span className="g-recaptcha" data-sitekey="6Lf5L1AcAAAAAN8BwFvZHoNTyURSo7e-IuskSdBL" />

                        <button type="submit" id="btn">Submit</button>
                    </div>

                </Row>

                </form>

            </div>

        );
    }
}

export default ReCAPTCHA;


