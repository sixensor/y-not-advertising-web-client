import React, {Component} from 'react';
import {Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import FormText from "reactstrap/es/FormText";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import DatePicker from "react-datepicker";
import Spinner from "reactstrap/es/Spinner";
import Env from "../../Env/env";
import MessengerCustomerChat from "react-messenger-customer-chat";
import Popover from "reactstrap/es/Popover";
import PopoverBody from "reactstrap/es/PopoverBody";


class CreateCampaign extends Component {

  constructor(props) {
    super(props);
    this.state = {
      caller_id_id: '1',
      message_content: '',
      is_scheduled: false,
      input_format: 'csv',
      csv_file_name: '',
      numbers: '',
      caller_ids: undefined,
      is_show_file_upload_spinner: false,
      scheduled_date: new Date(),
    }
  }

  // Get current session bearer token
  getBearerToken() {
    let session = JSON.parse(localStorage.getItem('Session'));
    if (!session) {
      this.props.history.push('/login');
    }
    return 'Bearer ' + session.token
  }

  componentDidMount() {
    // caller id must call here
    const userCallerIdUrl = Env.getURL("/api/v1.0/user/caller-ids");
    axios.get(userCallerIdUrl,
      {
        headers: {
          Authorization: this.getBearerToken(),
        }
      }).then(resp => {
      let callerIds = resp.data.map(x => x);
      this.setState({
        caller_ids: callerIds,
      });
    }).catch(err => {
      console.log(err)
    });
  }


  // Capture the parameters on change events
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // Handle changes
  handleChange = date => {
    this.setState({
      scheduled_date: date
    });
  };

  // Date Picker
  // Show and hide and date Picker
  scheduleOnTick(e) {
    if (e.target.checked === true) {
      this.setState({
        is_scheduled: true,
      });
    } else {
      this.setState({
        is_scheduled: false,
      });
    }
  }

  // Date Picker of scheduling the sms request
  dateFlicker(e) {
    if (this.state.is_scheduled) {
      return (
        <FormGroup>
          <Label for="scheduleTimeDatePicker">Date and Time</Label>
          <br/>
          <DatePicker
            id="scheduleTimeDatePicker"
            selected={this.state.scheduled_date}
            onChange={this.handleChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
          />
        </FormGroup>)
    } else {
      return ""
    }
  }

  // Uploading format configurations
  // On uploading format select
  // Formats : csv(default) and txt
  onInputFormatSelect(e) {
    console.log(e.target.value);
    this.setState({
        input_format: e.target.value,
      }
    )
  }

  // number list upload as csv file
  uploadCSV(e) {
    this.setState({
      is_show_file_upload_spinner: true
    });
    // Upload URL
    const uploadUrl = Env.getStaticURL("/auth/upload");
    // Upload file to server
    const data = new FormData();
    const file = e.target.files[0];
    data.append('file', file);
    axios.post(uploadUrl, data, {
      headers: {
        Authorization: this.getBearerToken(),
      }
    }).then(res => {
      this.setState({
        csv_file_name: res.data.file_name,
        is_show_file_upload_spinner: false
      })
    }).catch(err => {
      this.setState({
        is_show_file_upload_spinner: false
      })
    })
  }

  // Spinner is showing when uploading
  // After upload completed it will disappear
  fileUploadSpinner() {
    if (this.state.is_show_file_upload_spinner) {
      return (<div><Spinner color="success"/></div>)
    } else {
      return (<div></div>)
    }
  }

  // Display input formats according to the selection.
  numberListInsertingFormat() {
    if (this.state.input_format === "csv") {
      return (
        <FormGroup>
          <Label for="exampleFile">Upload CSV</Label>
          <Input type="file" name="file" id="" onChange={e => this.uploadCSV(e)}/>
          <FormText color="muted">
            {this.fileUploadSpinner()}
          </FormText>
        </FormGroup>
      )
    } else {
      return (
        <FormGroup row>
          <Label for="exampleText" sm={12}>Phone Numbers</Label>
          <Col sm={12}>
            <Input type="textarea" name="text"/>
          </Col>
        </FormGroup>
      )
    }
  }

  // Submit create campaign
  createAndCheckoutCampaignSubmit(e) {
    const createCampaignUrl = Env.getURL("/api/v1.0/user/message-request/checkout");
    e.preventDefault();
    axios.post(createCampaignUrl, {
      caller_id_id: Number(this.state.caller_id_id),
      message_content: this.state.message_content,
      is_scheduled: this.state.is_scheduled,
      scheduled_date: this.state.scheduled_date,
      input_format: this.state.input_format,
      csv_file_name: this.state.csv_file_name,
      numbers: this.state.numbers,
    }, {
      headers: {
        Authorization: this.getBearerToken(),
      }
    }).then(resp => {
      console.log(resp.data);
      localStorage.setItem("CampaignProcessedData", JSON.stringify(resp.data));
      this.props.history.push('/campaign/pay')
    }).catch(err => {
      // console.log(err.response)
    });
  }

  // Number list uploading using CSV File format
  render() {
    let caller_ids_elements;
    if (this.state.caller_ids !== undefined && this.state.caller_ids !== null) {
      caller_ids_elements = this.state.caller_ids.map(item =>
        <option value={item.id}>{item.code}</option>
      );
    }
    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg="3">
          </Col>
          <Col lg="6">
            <div>
              {/*<Popover placement="top" isOpen={true} target="Popover">*/}
              {/*  <PopoverBody>*/}
              {/*    <h4>Send Message to request a Caller ID</h4>*/}
              {/*  </PopoverBody>*/}
              {/*</Popover>*/}
              <MessengerCustomerChat
                pageId="523968557626926"
                appId="316347486158151"
                themeColor="#6f42c1"
                loggedInGreeting="Chat with us"
                loggedOutGreeting="Thank you contacting Y not Advertising"
              />
            </div>
            <Card>
              <CardHeader>
                <strong>Create Campaign</strong>
              </CardHeader>
              <CardBody>
                <Form onSubmit={e => this.createAndCheckoutCampaignSubmit(e)}>
                  {/*Caller ids*/}
                  <FormGroup>
                    <Label for="exampleSelect"><strong>Select Caller ID</strong></Label>
                    <Input type="select"
                           name="caller_id_id"
                           id="caller_id_id"
                           onChange={e => this.onChange(e)} value={this.state.caller_id_id}
                    >
                      {caller_ids_elements}
                    </Input>
                    <FormText color="muted">
                      Note: this shows as the sender on mobile phone of your campaign.
                    </FormText>
                  </FormGroup>
                  {/*Message content*/}
                  <FormGroup row>
                    <Label for="messageContent" sm={12}>Message Content</Label>
                    <Col sm={12}>
                      <Input type="textarea"
                             name="message_content"
                             id="messageContent"
                             onChange={e => this.onChange(e)} value={this.state.message_content}/>
                    </Col>
                  </FormGroup>

                  {/*Sending time configurations*/}
                  <FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox"
                               id="scheduleSendingToggle"
                               onChange={e => this.scheduleOnTick(e)}/>
                        Scheduled Sending
                      </Label>
                    </FormGroup>
                    {this.dateFlicker()}
                  </FormGroup>

                  {/*Number inserting formatting*/}
                  <FormGroup>
                    <Label>Number List Inserting Format:</Label>
                    <Input type="select"
                           name="input_format"
                           id="input_format"
                           onChange={e => this.onInputFormatSelect(e)} value={this.state.input_format}>
                      <option value="csv">CSV Format</option>
                      <option value="txt">Text Format</option>
                    </Input>
                    {this.numberListInsertingFormat()}
                  </FormGroup>
                  <Button type="submit" color="dark">Pay and Send</Button>
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
