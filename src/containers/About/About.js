import React, {Component} from 'react';
import IndexNavbar from "../../views/Navbars/IndexNavbar";
import DemoFooter from "../../views/Footers/DemoFooter";
import "../../assets/css/bootstrap.min.css";
import "../../assets/scss/paper-kit.scss";
import "../../assets/demo/demo.css";
import {Col, Row} from "reactstrap";
import Container from "reactstrap/es/Container";
import Jumbotron from "reactstrap/lib/Jumbotron";
import aboutUsImg from  '../../assets/img/ynot/about-us.png'
// styles
let pageHeader = React.createRef();

class About extends Component {
  render() {
    return (
      <>
        {/*<LandingPage/>*/}
        <IndexNavbar/>
        {/*<IndexHeader/>*/}
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
            <div className="filter" />
          </div>
          <div className="section">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-justify" md="8">
                  <h2 className="page-header-text">About Us</h2>
                  <br/>
                  <p className="description content-text">
                    Y-Not Advertising SMS API Services in Sri Lanka and 2012 and
                    extended to other parts of the world gradually. Getting access
                    to our Bulk SMS Gateway anywhere across the globe, small businesses
                    will be able to do Mass Messaging thus expanding their market and
                    reaching out to a larger number of existing and potential customers at once.
                    Our services ensure the security and safety of the data and information of your business.
                    Having a cost-effective, faster, and time-saving Gateway, you’ll be able to send several
                    instant messages towards your clients without having to worry about any breaches. With our
                    technological and telecommunication expertise, we’re helping businesses meet the
                    expectations of their customers with just a few clicks. You can use this fantastic service to
                  <ul>
                    <li>Promote a product</li>
                    <li>Remind your customers about a deal</li>
                    <li>Tell your customers what’s coming next</li>
                    <li>Coordinate with stakeholders and employees</li>
                    <li>Inform customers about discount offers</li>
                  </ul>
                    SMS API services by Y-Not Advertising allows you to update your customers, send them reminders or
                    notifications, which helps you successfully meet the goals of a customer-centred business approach.
                    Using bulk instant messaging provided by Y-Not Advertising will help you enhance brand awareness,
                    improve customer relationship management, and generate more sales in less time.
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

export default About;
