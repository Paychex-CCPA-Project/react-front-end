import React, {Component} from "react";
import Personal from "./personal";
import Address from "./Address";
import RequestQ from "./RequestQ";
import Contact from "./Contact";
import Request from "./Request";
import { Container, Row, Col } from 'reactstrap';
import ReCAPTCHA from "./reCAPTCHA";
import Submit from "./submit";


class App extends Component{
    state = {

    }


render() {

  return (
      <div>
          <Container fluid >
              {/*creates the table for the form app*/}
          <table>
              <tr>
                  {/*sections off the table for the components of the form*/}
                  <td>
                      <Row>
                          Personal Information Request Form
                      </Row>
                  </td>
              </tr>
              <tr>
                  <td>
                      <RequestQ />
              </td>
              </tr>
              <tr>
                  <td className="PersonData">
                      <Personal />
                  </td>
              </tr>
              <tr>
                  <td>
                      <Address />
                  </td>
              </tr>
              <tr>
                  <td>
                      <Contact/>
                  </td>
              </tr>
              <tr>
                  <td>
                      <Request />
                  </td>
              </tr>
              <tr>
                  <td>
                        <ReCAPTCHA />
                        <Submit />
                  </td>
              </tr>
          </table>
         </Container>

      </div>
  );
}
}


export default App;
