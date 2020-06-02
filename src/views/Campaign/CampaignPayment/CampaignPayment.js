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


class CampaignPayment extends Component {
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
        <Col md={3}>
        </Col>
        <Col md={6}>
          <Card>
            <CardBody>
              <a href="https://www.payhere.lk" target="_blank"><img
                src="https://www.payhere.lk/downloads/images/payhere_long_banner.png" alt="PayHere" width="400"/></a>
              <form method="post" action="https://sandbox.payhere.lk/pay/checkout">

                {/*Hidden variables*/}
                <FormGroup>
                  <Input type="hidden" name="merchant_id" value="1213806"/>
                </FormGroup>
                <FormGroup>
                  <Input type="hidden" name="notify_url" value="http://167.99.174.148:8001/api/v1.0/payhere/notify"/>
                </FormGroup>
                <FormGroup>
                  <Input type="hidden" name="return_url" value={this.state.return_url}/>
                </FormGroup>
                <FormGroup>
                  <Input type="hidden" name="cancel_url" value={this.state.cancel_url}/>
                </FormGroup>

                {/*Visible variables*/}
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="campaignId">Campaign Id</Label>
                      <Input type="text" id="campaignId" name="order_id" value={this.state.message_request_id}
                             disabled/>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="name">Description</Label>
                      <Input type="text" id="name" name="items" value={this.state.description} disabled/>
                    </FormGroup>
                  </Col>
                </Row>

                <FormGroup>
                  <Label for="currency">Currency</Label>
                  <Input type="text" id="currency" name="currency" value={this.state.currency} disabled/>
                </FormGroup>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="firstName">First Name</Label>
                      <Input type="text" id="firstName" name="first_name" value={this.state.customer.first_name} disabled/>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="lastName">Last Name</Label>
                      <Input type="text" id="lastName" name="last_name" value={this.state.customer.last_name} disabled/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="email">E-mail</Label>
                      <Input type="text" id="email" name="email" value={this.state.customer.email} disabled/>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="phone">Phone</Label>
                      <Input type="text" id="phone" name="phone" value={this.state.customer.phone_number} disabled/>
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label for="address">Address</Label>
                  <Input type="text" id="address" name="address" value={this.state.customer.address_line_one +',' +this.state.customer.address_line_two} disabled/>
                </FormGroup>
                <FormGroup>
                  <Label for="city">City</Label>
                  <Input type="text" id="city" name="city" value={this.state.customer.city} disabled/>
                </FormGroup>
                <FormGroup>
                  <Label for="country">Country</Label>
                  <Input type="text" id="country" name="country" value={this.state.customer.country} disabled/>
                </FormGroup>
                <FormGroup>
                  <Label for="amount">Total Amount</Label>
                  <Input type="text" id="amount" name="amount" value={this.state.total} disabled/>
                </FormGroup>
                <Button type="submit" className="primary">Pay Now</Button>
              </form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default CampaignPayment;
