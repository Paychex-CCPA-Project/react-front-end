import './App.css';
import React from "react";
import Personal from "./personal";
import Address from "./Address";
import RequestQ from "./RequestQ";
import Contact from "./Contact";
import { Container, Row, Col } from 'reactstrap';

function App() {

  return (
      <div>
          <Container fluid >
          <table>
              <tr>
                  <td>
                      <Row>
                          <Col>Personal Information Request Form</Col>
                      </Row>
                  </td>
              </tr>
              <tr>
                  <td>
                      <RequestQ />
              </td>
              </tr>
              <tr>
                  <td>
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
          </table>
         </Container>
      </div>
  );
}

export default App;
