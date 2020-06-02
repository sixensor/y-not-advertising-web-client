import React, {Component} from 'react';
import IndexNavbar from "../../views/Navbars/IndexNavbar";
import DemoFooter from "../../views/Footers/DemoFooter";
import "../../assets/css/bootstrap.min.css";
import "../../assets/scss/paper-kit.scss";
import "../../assets/demo/demo.css";
import {Button, Card, CardBody, Col, Row} from "reactstrap";
import Container from "reactstrap/es/Container";
import Carousels from "../../views/Base/Carousels";
import Steps, {Step} from "rc-steps";
import "rc-steps/assets/index.css";
import "rc-steps/assets/iconfont.css";
import {PricingDetail, PricingSlot, PricingTable} from 'react-pricing-table';

// styles

class Index extends Component {
  render() {
    return (
      <>
        {/*<LandingPage/>*/}
        <IndexNavbar/>
        {/*<IndexHeader/>*/}
        <div className="main">
          <Carousels/>
          <div className="section">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <h2 className="title header-text">Our Service</h2>
                  <p className="description content-text">
                    <strong>Y-Not Advertising</strong> is aimed at providing small businesses with cost-effective
                    SMS Gateway to ease the process of sending promotional texts and reminders to
                    pinpointed audiences. Using our Bulk SMS service will be effective to build a more
                    reliable connection and communication between the organization and its customers. Furthermore,
                    it will help businesses enhance awareness and drive attention towards your brand.
                  </p>
                  <br/>
                  <Button
                    className="btn-round"
                    color="default"
                    href="/services"
                    onClick={e => e.preventDefault()}
                  >
                    See Details
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <h2 className="title header-text">About Us</h2>
                  <p className="description content-text">
                    Initiated as a small Bulk SMS service provider in Sri Lanka in 2012,
                    Y-Not Advertising has proved itself by helping small businesses to shine.
                    Providing dependable SMS gateways for small enterprises for reaching out to
                    their existing and potential customers, we assisted them in quick interaction
                    with the targeted audience in a fraction of seconds.
                  </p>
                  <br/>
                  <Button
                    className="btn-round header-text"
                    color="default"
                    href="/about-us"
                    onClick={e => e.preventDefault()}
                  >
                    See Details
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col className="ml-auto mr-auto content-text" md="8">
                  <h2 className="title header-text">Follow These Simple Steps</h2>
                  <Steps direction="vertical" current={5} status="">
                    <Step
                      title="Sign-Up and create an account"
                    />
                    <Step
                      title="Name your campaign"
                    />
                    <Step
                      title="Specify the Sender ID"
                    />
                    <Step
                      title="Create a list of contacts"
                    />
                    <Step
                      title="Start Sending Bulk SMS"
                    />
                  </Steps>
                </Col>
              </Row>
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <h2 className="title header-text">Our Service</h2>
                  <h3 className="title header-text">Engage More Customers</h3>
                  <p className="description content-text">
                    Engaging customers with and keeping them up to date is of utmost significance
                    when managing marketing campaigns. Our Bulk SMS gateway helps you engage more customers
                    and promote your products and services by delivering updates and notifications that make you stay on
                    the audience’s mind.
                    So, start texting your customers today and make sure that you stay in touch with them.
                  </p>
                  <h3 className="title header-text">Widespread Access</h3>
                  <p className="description content-text">
                    Bulk SMS Gateway services by Y-Not Advertising challenge the limits and allow businesses
                    wider and extensive access to a greater number of customers with just a few clicks.
                    We bring a huge opportunity for small businesses in Sri Lanka as well as other
                    countries to connect with people in several territories.
                  </p>
                  <h3 className="title header-text">Engage More Customers</h3>
                  <p className="description content-text">
                    We enable small businesses to yield more profits and engage with targeted audiences
                    with a cost-effective and fast Mass Messaging service that assures a
                    higher return on investment. So, take your business profits to new heights with us!
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="section section-dark text-center">
            <Container>
              {/*<h2 className="title header-text">Testimonials</h2>*/}
              <Row>
                <Col md="12">
                  <Card className="card-plain">
                    <CardBody>
                      <p className="card-description text-center testimonial-text">
                        " It helped me get more clients, and I got responses from hundreds
                        and thousands of people in days. It’s the best and the most reliable
                        service I’ve ever used that addressed significant marketing concerns
                        and largely contributed to higher profits. "
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="sectiontext-center section-basic text-center">
            <h2 className="title header-text">Price Plans</h2>
          </div>
          <DemoFooter/>
        </div>
      </>
    );
  }
}

export default Index;
