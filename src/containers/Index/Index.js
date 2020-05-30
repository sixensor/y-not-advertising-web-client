import React, {Component} from 'react';
import IndexNavbar from "../../views/Navbars/IndexNavbar";
import IndexHeader from "../../views/Headers/IndexHeader";
import DemoFooter from "../../views/Footers/DemoFooter";
import "../../assets/css/bootstrap.min.css";
import "../../assets/scss/paper-kit.scss";
import "../../assets/demo/demo.css";
import {Button, Card, CardBody, Col, Row} from "reactstrap";
import Container from "reactstrap/es/Container";
import Stepper from "react-stepper-horizontal";
import Carousels from "../../views/Base/Carousels";

// styles

class Index extends Component {
  render() {
    return (
      <>
        {/*<LandingPage/>*/}
        <IndexNavbar/>
        {/*<IndexHeader/>*/}
        <div className="main">
          <Carousels />
          <div className="section">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <h2 className="title">About Us</h2>
                  <h5 className="description">
                    This is the paragraph where you can write more details about your product.
                    Keep you user engaged by providing meaningful information. Remember that by
                    this time, the user is curious, otherwise he wouldn't scroll to get here.
                    Add a button if you want the user to see more.
                  </h5>
                  <br/>
                  <Button
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    See Details
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <h2 className="title">Our Service</h2>
                  <h5 className="description">
                    <strong>Y-Not Advertising</strong> is aimed at providing small businesses with cost-effective
                    SMS Gateway to ease the process of sending promotional texts and reminders to
                    pinpointed audiences. Using our Bulk SMS service will be effective to build a more
                    reliable connection and communication between the organization and its customers. Furthermore,
                    it will help businesses enhance awareness and drive attention towards your brand.
                  </h5>
                  <br/>
                  <Button
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    See Details
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="section">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <h2 className="title">Follow These Simple Steps</h2>
                  <Stepper steps={[
                    {title: 'Sign-Up and create an account'},
                    {title: 'Name your campaign'},
                    {title: 'Specify the Sender ID'},
                    {title: 'Create a list of contacts'},
                    {title: 'Start Sending Bulk SMS'}
                  ]} activeStep={5}/>

                </Col>
              </Row>
            </Container>
          </div>
          <div className="section section-dark text-center">
            <Container>
              <h2 className="title">Testimonials</h2>
              <Row>
                <Col md="4">
                  <Card className="card-plain">
                    <CardBody>
                      <p className="card-description text-center">
                        Initiated as a small Bulk SMS service provider in Sri Lanka in 2012,
                        Y-Not Advertising has proved itself by helping small businesses to shine.
                        Providing dependable SMS gateways for small enterprises for reaching out to
                        their existing and potential customers, we assisted them in quick interaction
                        with the targeted audience in a fraction of seconds.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-plain">
                    <CardBody>
                      <p className="card-description text-center">
                        An intuitive and user-interactive system that made
                        my first marketing campaign a piece of cake. I got
                        rapid access to my customers as well as the fastest
                        and fantastic way to interact with them and send
                        promotion SMS in Bulk.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-plain">
                    <CardBody>
                      <p className="card-description text-center">
                        It has been an excellent experience to use this SMS Gateway that met
                        all the marketing needs of my business. Using this service,
                        I was able to provide a faster and dedicated customer
                        service that resulted in tremendous growth and positive responses.
                      </p>
                    </CardBody>
                  </Card>
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

export default Index;
