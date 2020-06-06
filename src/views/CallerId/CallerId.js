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
      message_request_id: 0,
      transaction_id: 0,
      description: '',
      currency: '',
      items: undefined,
      total: '',
      date: '',
      customer: {
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        address_line_one: '',
        address_line_two: '',
        city: '',
        country: ''
      },
      return_url: '',
      cancel_url:''
    }
  }

  componentDidMount() {
    let processedData = JSON.parse(localStorage.getItem('CampaignProcessedData'));
    // console.log(processedData)
    this.setState({
      message_request_id: processedData.message_request_id,
      transaction_id: processedData.transaction_id,
      description: processedData.description,
      currency: processedData.currency,
      items: processedData.items,
      total: processedData.total,
      date: processedData.date,
      customer: {
        first_name: processedData.customer.first_name,
        last_name: processedData.customer.last_name,
        email: processedData.customer.email,
        phone_number: processedData.customer.phone_number,
        address_line_one: processedData.customer.address_line_one,
        address_line_two: processedData.customer.address_line_two,
        city: processedData.customer.city,
        country: processedData.customer.country,
      }
    })
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
