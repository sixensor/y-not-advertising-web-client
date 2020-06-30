import React, {Component} from 'react';
import IndexNavbar from "../../views/Navbars/IndexNavbar";
import DemoFooter from "../../views/Footers/DemoFooter";
import "../../assets/css/bootstrap.min.css";
import "../../assets/scss/paper-kit.scss";
import "../../assets/demo/demo.css";
import {Card, CardBody, Col, Row} from "reactstrap";
import Container from "reactstrap/es/Container";

// styles
let pageHeader = React.createRef();

class ContactUs extends Component {
  render() {
    return (
      <>
        {/*<LandingPage/>*/}
        <IndexNavbar/>
        <div className="main">
          <div
            style={{
              backgroundImage:
                "url(" + require("../../assets/img/ynot/about-us.png") + ")"
            }}
            className="page-header page-header-xs"
            data-parallax={true}
            ref={pageHeader}
          >
            <div className="filter"/>
          </div>
          <div className="section">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <h2 className="page-header-text">Contact Us</h2>
                  <p className="description content-text">
                    <div className="section">
                      <Container>
                        <Row>
                          <Col md="12">
                            <Card className="card-plain">

                              <CardBody>
                                <h6>Location</h6>
                                <br/>
                                <p className="description content-text"> No.233/C, Kanduboda,</p>
                                <p className="description content-text">Delgoda.</p>
                                <p className="description content-text">Srilanka.</p>
                                <br/>
                                <h6>Phone</h6>
                                <br/>
                                <p className="description content-text">*94772948947</p>
                                <br/>
                                <h6>Email</h6>
                                <br/>
                                <p className="description content-text">support@y-not.lk</p>
                              </CardBody>
                            </Card>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
          <DemoFooter/>
        </div>
      </>
    );
  }
}

export default ContactUs;
