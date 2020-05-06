import React, {Component} from 'react';
import {Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import FormText from "reactstrap/es/FormText";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class CreateCampaign extends Component {

  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg="3">
          </Col>
          <Col lg="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Create Campaign</strong>
              </CardHeader>
              <CardBody>
                <Form>
                  {/*Caller ids*/}
                  <FormGroup>
                    <Label for="exampleSelect">Select Caller ID</Label>
                    <Input type="select" name="select" id="exampleSelect">
                      <option>Y-Not Advertising</option>
                      <option>Provincial Campaign</option>
                    </Input>
                  </FormGroup>

                  {/*Message content*/}
                  <FormGroup row>
                    <Label for="exampleText" sm={12}>Message Content</Label>
                    <Col sm={12}>
                      <Input type="textarea" name="text" id="exampleText"/>
                    </Col>
                  </FormGroup>

                  {/*Sending time configurations*/}
                  <FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" id="checkbox2"/>{' '}
                        Scheduled Sending
                      </Label>
                    </FormGroup>
                    <FormGroup>
                      <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        timeCaption="time"
                        dateFormat="MMMM d, yyyy h:mm aa"
                      />
                    </FormGroup>
                  </FormGroup>

                  {/*Number inserting formatting*/}
                  <FormGroup>
                    <Label>Select Caller ID</Label>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="numberInsert"/>{' '}
                        Text Input
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="numberInsert"/>{' '}
                        CSV
                      </Label>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="exampleText" sm={12}>Phone Numbers</Label>
                      <Col sm={12}>
                        <Input type="textarea" name="text"/>
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleFile">Upload CSV</Label>
                      <Input type="file" name="file" id=""/>
                      <FormText color="muted">
                        Note: File should be formatted like this <a href="">example</a>.
                      </FormText>
                    </FormGroup>
                  </FormGroup>
                  <Button color="primary">Pay and Send</Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CreateCampaign;
