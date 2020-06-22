import React, {Component} from 'react';
import {Card, CardBody, Col, Row} from 'reactstrap';
import axios from "axios";
import Button from "reactstrap/lib/Button";
import Form from "reactstrap/lib/Form";
import FormGroup from "reactstrap/lib/FormGroup";
import Label from "reactstrap/lib/Label";
import DatePicker from "reactstrap-date-picker";
import './transaction-history.css';
import Alert from "reactstrap/lib/Alert";
import Table from "reactstrap/lib/Table";

class TransactionHistory extends Component {


  constructor(props) {
    super(props);

    this.state = {
      transactions: undefined,
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
    this.callTransactions(this.state.from_date, this.state.to_date)
  }


  callTransactions(fromDate, toDate) {
    const userTransactionsUrl = "http://y-not.lk:8001/api/v1.0/user/transactions?from_date="
      + fromDate + "&to_date=" + toDate;
    axios.get(userTransactionsUrl,
      {
        headers: {
          Authorization: this.getBearerToken(),
        }
      }).then(resp => {
      let transactions = resp.data.map(x => x);
      console.log(transactions.length)
      if (transactions.length === 0) {
        this.setState({
          transactions: transactions,
          no_items_alert: 'No Items to show !'
        });
      } else {
        this.setState({
          transactions: transactions,
          no_items_alert: ''
        });
      }
    }).catch(err => {
      console.log(err)
    });
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
    this.callTransactions(this.formatDate(value), this.state.to_date)
  }

  handleToDateChange(value, formattedValue) {
    this.setState({
      to_date: this.formatDate(value),
    })
    this.callTransactions(this.state.from_date, this.formatDate(value))
  }

  resetFilter(e) {
    let currentDateFormatted = this.formatDate(new Date().toISOString())
    this.setState({
      to_date: currentDateFormatted,
      from_date: currentDateFormatted,
    })
    this.callTransactions(currentDateFormatted, currentDateFormatted)
  }

  render() {
    let transactions;
    if (this.state.transactions !== undefined && this.state.transactions !== null) {
      transactions = this.state.transactions.map(item =>
        // "id": 1,
        // "description": "",
        // "message_request_id": 0,
        // "additional_fees": "",
        // "total": "100.00",
        // "date": "2020-05-12T09:04:25+05:30"
        <tr>
          <td>{this.formatDateTime(item.date)}</td>
          <td className="text-left">{item.description}</td>
          <td>{item.message_request_id}</td>
          <td className="text-right">{item.additional_fees}</td>
          <td className="text-right">{item.total}</td>
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
                <h4 className="header-text">Your Transactions</h4>
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
                <Table responsive striped className="custom-transaction-table">
                  <thead>
                  <tr className="header-text">
                    <th>Date</th>
                    <th>Description</th>
                    <th>Request ID</th>
                    <th>Extra Fees</th>
                    <th>Total</th>
                  </tr>
                  </thead>
                  <tbody>
                  {transactions}
                  </tbody>
                </Table>
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

export default TransactionHistory;
