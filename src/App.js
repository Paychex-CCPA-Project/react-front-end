import React from "react";
import Personal from "./personal";
import Address from "./Address";
import RequestQ from "./RequestQ";
import Contact from "./Contact";
import Request from "./Request";
import { Container, Row, Col } from 'reactstrap';
import ReCAPTCHA from "./reCAPTCHA";


const App = ({title}) => {

  return (
      <div>
          <form method="post" className="form-Main">
          <Container fluid >
              {/*creates the table for the form app*/}
          <table>
              <tr>
                  {/*sections off the table for the components of the form*/}
                  <td>
                      <Row>
                          <Col>{title}</Col>
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
                  </td>
              </tr>
          </table>
         </Container>
      </form>
      </div>
  );
}
App.defaultProps = {
    title: 'Personal Information Request Form'
}

export default App;
