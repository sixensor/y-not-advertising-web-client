import React, {Component} from 'react';
import {Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import FormText from "reactstrap/es/FormText";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";


class CreateCampaign extends Component {


  constructor(props) {
    super(props);
    this.state = {
      caller_id_id: '1',
      message_content: '',
      is_scheduled: false,
      scheduled_date: '',
      input_format: '',
      csv_file_name: '',
      numbers: '',
      caller_ids: '',
    }
  }

  componentDidMount() {
    // get session here
    let session = JSON.parse(localStorage.getItem('Session'));
    if (!session) {
      this.props.history.push('/login');
    }
    // caller id must call here
    const userCallerIdUrl = "http://167.99.174.148:8001/api/v1.0/user/caller-ids";
    axios.get(userCallerIdUrl,
      {
        headers: {
          Authorization: 'Bearer ' + session.token,
        }
      }).then(resp => {
      this.setState({
        caller_ids: resp.data
      });
    }).catch(err => {
      console.log(err)
    });
  }

  state = {
    startDate: new Date()
  };

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };


  createCampaignSubmit(e) {
    e.preventDefault();
    console.log(this.state)
  }

  render() {


    let caller_ids_elements;
    if (this.state.caller_ids !== undefined && this.state.caller_ids !== null) {
      caller_ids_elements = this.state.caller_ids.map((item) =>
        <option value={item.id}>{item.name}</option>
      );
    }

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
                <Form onSubmit={e => this.createCampaignSubmit(e)}>
                  {/*Caller ids*/}
                  <FormGroup>
                    <Label for="exampleSelect">Select Caller ID</Label>
                    <Input type="select"
                           name="caller_id_id"
                           id="caller_id_id"
                           onChange={e => this.onChange(e)} value={this.state.caller_id_id}
                    >
                      <option value='1'>Y-Not Advertising</option>
                      <option value='2'>Provincial Campaign</option>
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
