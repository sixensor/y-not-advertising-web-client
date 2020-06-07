import React, {Component} from 'react';
import "react-datepicker/dist/react-datepicker.css";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import Card from "reactstrap/es/Card";
import CardBody from "reactstrap/es/CardBody";
import FormGroup from "reactstrap/es/FormGroup";
import Label from "reactstrap/es/Label";
import Input from "reactstrap/es/Input";
import Button from "reactstrap/es/Button";


class CallerId extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    let processedData = JSON.parse(localStorage.getItem('CampaignProcessedData'));
  }

  test(e){
    console.log(this.state)
  }
  
  render() {
    return (
      <Row>
        <Col md={6}>
        <Card>
            <CardBody>
              <h4 className="header-text">Add Caller ID</h4>
              <br/>
            </CardBody>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <CardBody>
              <h4 className="header-text">System Caller IDs</h4>
              <br/>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default CallerId;
