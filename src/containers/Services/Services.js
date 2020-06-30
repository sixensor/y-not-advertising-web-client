import React, {Component} from 'react';
import IndexNavbar from "../../views/Navbars/IndexNavbar";
import DemoFooter from "../../views/Footers/DemoFooter";
import "../../assets/css/bootstrap.min.css";
import "../../assets/scss/paper-kit.scss";
import "../../assets/demo/demo.css";
import {Button, Card, CardBody, Col, Row} from "reactstrap";
import Container from "reactstrap/es/Container";
import Stepper from "react-stepper-horizontal";
import Jumbotron from "reactstrap/lib/Jumbotron";

// styles
let pageHeader = React.createRef();

class Services extends Component {
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
                <Col className="ml-auto mr-auto text-justify" md="8">
                  <h2 className="page-header-text">Services</h2>
                  <br/>
                  <p className="description content-text">
                    <h5>Planning to reach out to a wider customer base?</h5>
                    Y-Not Advertising has a professional solution that meets
                    your communication and marketing goals quickly and efficiently.
                    <br/>
                    With our system designed for Mass Messaging to the targeted customers,
                    you’ll be able to send instant messages to small and large groups of
                    people to keep them updated and engaged. Once signed up, you’ll get a
                    unique sender ID that can be the name of your company, campaign, or
                    any standard mobile number. Recipients will get receive your message instantly.
                    This can be the fastest way for your businesses to let customers know about the promotions,
                    discount vouchers, and coupons, collect feedbacks and surveys, and to inform then
                    about new products.
                    <br/>
                    Our system is designed using years of experience and technological
                    expertise and has a user-interactive interface that brings an easier, faster and cost-effective
                    marketing opportunity for small businesses. With our intuitive system,
                    you just have to choose how you want to send your bulk SMS and leave the
                    rest to us. We help you compose, send, and respond to messages quickly with
                    one system without having your energy drained in the process.
                    <br/>
                    Following a few simple steps,
                    you’ll be able to create a contact list and send text messages in a concise time with our
                    high-performance
                    SMS gateway. So, Y-Not Advertising, with its team of qualified professionals,
                    comes up with the most intriguing and straightforward way to capture the attention of more
                    customers.
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

export default Services;
