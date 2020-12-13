import React, {Component} from 'react';
import "react-datepicker/dist/react-datepicker.css";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import Card from "reactstrap/es/Card";
import CardBody from "reactstrap/es/CardBody";
import Form from "reactstrap/es/Form";
import FormGroup from "reactstrap/es/FormGroup";
import Input from "reactstrap/lib/Input";
import Label from "reactstrap/es/Label";
import Button from "reactstrap/lib/Button";
import Env from "../../Env/env";

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
      cancel_url: ''
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

  test(e) {
    e.preventDefault()
    const data = new FormData(e.target);
    console.log(data.get("merchant_id"));
    console.log(data.get("return_url"));
    console.log(data.get("cancel_url"));
    console.log(data.get("notify_url"));
    console.log(data.get("first_name"));
    console.log(data.get("last_name"));
    console.log(data.get("email"));
    console.log(data.get("phone"));
    console.log(data.get("address"));
    console.log(data.get("city"));
    console.log(data.get("country"));
    console.log(data.get("order_id"));
    console.log(data.get("items"));
    console.log(data.get("currency"));
    console.log(data.get("amount"));
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
                src="https://www.payhere.lk/downloads/images/payhere_long_banner.png" alt="PayHere"
                className="img-fluid"/></a>
              <Form method="post" action="https://sandbox.payhere.lk/pay/checkout">
              {/*<Form onSubmit={e => this.test(e)}>*/}
                {/*Hidden variables*/}
                <FormGroup>
                  <Input type="hidden" name="merchant_id" value="1213806"/>
                </FormGroup>
                <FormGroup>
                  <Input type="hidden" name="notify_url" value={Env.getURL("/api/v1.0/payhere/notify")}/>
                </FormGroup>
                <FormGroup>
                  <Input type="hidden" name="return_url" value={Env.redirectTo("/campaign/history")}/>
                </FormGroup>
                <FormGroup>
                  <Input type="hidden" name="cancel_url" value={Env.redirectTo("/campaign/history#")}/>
                </FormGroup>
                <FormGroup>
                  <Input type="hidden" name="cancel_url" value={Env.redirectTo("/campaign/history#")}/>
                </FormGroup>
                <FormGroup>
                  <Input type="hidden" name="custom_1" value={this.state.transaction_id}/>
                </FormGroup>
                <FormGroup>
                  <Input type="hidden" name="custom_2" value={this.state.message_request_id}/>
                </FormGroup>

                {/*Visible variables*/}
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="order_id">Campaign Id</Label>
                      <Input type="text" id="order_id"
                             name="order_id" value={this.state.message_request_id} readonly="readonly" />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="items">Description</Label>
                      <Input type="text" id="items"
                             name="items" value={this.state.description} readonly="readonly"/>
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label for="currency">Currency</Label>
                  <Input type="text" id="currency"
                         name="currency" value={this.state.currency} readonly="readonly" />
                </FormGroup>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="first_name">First Name</Label>
                      <Input type="text" id="first_name"
                             name="first_name" value={this.state.customer.first_name} readonly="readonly" />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="last_name">Last Name</Label>
                      <Input type="text" id="last_name"
                             name="last_name" value={this.state.customer.last_name} readonly="readonly" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="email">E-mail</Label>
                      <Input type="text" id="email"
                             name="email" value={this.state.customer.email} readonly="readonly" />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="phone">Phone</Label>
                      <Input type="text" id="phone"
                             name="phone" value={this.state.customer.phone_number} readonly="readonly" />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label for="address">Address</Label>
                  <Input type="text" id="address" name="address"
                         value={this.state.customer.address_line_one + ',' + this.state.customer.address_line_two} readonly="readonly" />
                </FormGroup>
                <FormGroup>
                  <Label for="city">City</Label>
                  <Input type="text" id="city"
                         name="city" value={this.state.customer.city} readonly="readonly" />
                </FormGroup>
                <FormGroup>
                  <Label for="country">Country</Label>
                  <Input type="text" id="country"
                         name="country" value={this.state.customer.country} readonly="readonly" />
                </FormGroup>
                <FormGroup>
                  <Label for="amount">Total Amount</Label>
                  <Input type="text" id="amount"
                         name="amount" value={this.state.total} readonly="readonly" />
                </FormGroup>
                <Button type="submit" className="primary">Pay Now</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default CampaignPayment;


