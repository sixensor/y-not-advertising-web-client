import React, {Component} from 'react';
import {Card, CardBody, Col, Row} from 'reactstrap';
import axios from "axios";
import Button from "reactstrap/lib/Button";
import Form from "reactstrap/lib/Form";
import FormGroup from "reactstrap/lib/FormGroup";
import Label from "reactstrap/lib/Label";
import DatePicker from "reactstrap-date-picker";
import './campain-history.css';
import Alert from "reactstrap/lib/Alert";

class CampaignHistory extends Component {


  constructor(props) {
    super(props);

    this.state = {
      campaigns: undefined,
      to_date: this.formatDate(new Date().toISOString()),
      from_date: this.formatDate(new Date().toISOString()),
      no_items_alert: ''
    }
  }

  formatDateTime(dateStr) {
    let date = new Date(dateStr);
    return date.getFullYear() +
      '-' + (date.getMonth() + 1) +
      '-' + date.getDate() +
      ' ' + date.getHours() +
      ':' + date.getMinutes() +
      ':' + date.getSeconds();
  }

  formatDate(dateStr) {
    let date = new Date(dateStr);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dt = date.getDate();

    if (dt < 10) {
      dt = '0' + dt;
    }
    if (month < 10) {
      month = '0' + month;
    }

    return (year + '-' + month + '-' + dt);
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
    this.callMessageRequests(this.state.from_date, this.state.to_date)
  }


  callMessageRequests(fromDate, toDate) {
    const messageRequestsUrl = "http://167.99.174.148:8001/api/v1.0/user/message-requests?from_date="
      + fromDate + "&to_date=" + toDate;
    axios.get(messageRequestsUrl,
      {
        headers: {
          Authorization: this.getBearerToken(),
        }
      }).then(resp => {
      let campaigns = resp.data.map(x => x);
      console.log(campaigns.length)
      if (campaigns.length === 0) {
        this.setState({
          campaigns: campaigns,
          no_items_alert: 'No Items to show !'
        });
      } else {
        this.setState({
          campaigns: campaigns,
        });
      }
    }).catch(err => {
      console.log(err)
    });
  }

  getConfigurationButton(isTransactionCompleted, isMessageSend) {
    if (isTransactionCompleted === 0) {
      return (
        <Button className="btn-danger btn-sm header-text">Send</Button>
      )
    }
    if (isMessageSend === 0) {
      return (
        <Button className="btn-warning btn-sm header-text">Pay Now</Button>
      )
    }
    return (
      <Button className="btn-success btn-sm header-text">Get Invoice</Button>
    )
  }

  // Show alerts when
  showAlert(alert) {
    if (alert !== '')
      return (<>
        <Alert c color="danger">
          {alert}
        </Alert>
      </>)
  }

  handleFromDateChange(value, formattedValue) {
    this.setState({
      from_date: this.formatDate(value),
    })
    this.callMessageRequests(this.formatDate(value), this.state.to_date)
  }

  handleToDateChange(value, formattedValue) {
    this.setState({
      to_date: this.formatDate(value),
    })
    this.callMessageRequests(this.state.from_date, this.formatDate(value))
  }

  resetFilter(e) {
    let currentDateFormatted = this.formatDate(new Date().toISOString())
    this.setState({
      to_date: currentDateFormatted,
      from_date: currentDateFormatted,
    })
    this.callMessageRequests(currentDateFormatted, currentDateFormatted)
  }
  
  render() {
    let campaigns;
    if (this.state.campaigns !== undefined && this.state.campaigns !== null) {
      campaigns = this.state.campaigns.map(item =>
        <tr>
          <td>{item.id}</td>
          <td>{item.caller_id}</td>
          <td className="text-left">{item.content}</td>
          <td>{item.input_format}</td>
          <td>{this.formatDateTime(item.created_data)}</td>
          <td>{this.getConfigurationButton(item.is_transaction_completed, item.is_message_send)}</td>
        </tr>
      );
    } else {
      console.log("Loading")
    }

    return (
      <div className="animated fadeIn">
        <Row>
          <Col md={12}>
            <Card>
              <CardBody>
                <h4 className="header-text">Your Campaigns</h4>
                <br/>
                <Form className="filter-font">
                  <Row>
                    <Col xs={6}>
                      <FormGroup>
                        <Label htmlFor="fromDate">From Date</Label>
                        <DatePicker id="fromDate" value={this.state.from_date}
                                    onChange={(v, f) => this.handleFromDateChange(v, f)}
                                    showClearButton={false}/>
                      </FormGroup>
                    </Col>
                    <Col xs={6}>
                      <FormGroup>
                        <Label htmlFor="toDate">To Date</Label>
                        <DatePicker id="toDate" value={this.state.to_date}
                                    onChange={(v, f) => this.handleToDateChange(v, f)}
                                    showClearButton={false}/>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <Button onClick={e => this.resetFilter(e)} color="link"
                              className="header-text btn-sm">Reset</Button>
                    </Col>
                  </Row>
                </Form>
                <br/>
                <table className="custom-table">
                  <thead>
                  <tr className="header-text">
                    <th>ID</th>
                    <th>Caller Id</th>
                    <th>Message Content</th>
                    <th>Input Format</th>
                    <th>Created Date</th>
                    <th>Commands</th>
                  </tr>
                  </thead>
                  <tbody>
                  {campaigns}
                  </tbody>
                </table>
                <br/>
                {this.showAlert(this.state.no_items_alert)}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CampaignHistory;
