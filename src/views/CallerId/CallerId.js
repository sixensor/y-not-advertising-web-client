import React, {Component} from 'react';
import "react-datepicker/dist/react-datepicker.css";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import Card from "reactstrap/es/Card";
import CardBody from "reactstrap/es/CardBody";
import axios from "axios";
import Env from "../Env/env"
import "./caller-id.css"
import Badge from "reactstrap/lib/Badge";
import Button from "reactstrap/lib/Button";


class CallerId extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.caller_ids = undefined;
  }

  componentDidMount() {
    this.getCallerIdsHttpRequest()
  }


  // Get current session bearer token
  getSessionToken() {
    let session = JSON.parse(localStorage.getItem('Session'));
    if (!session) {
      this.props.history.push('/login');
    }
    return 'Bearer ' + session.token
  }

  getCallerIdsHttpRequest() {
    const messageRequestsUrl = Env.getURL("/api/v1.0/admin/caller-ids");
    axios.get(messageRequestsUrl,
      {
        headers: {
          Authorization: this.getSessionToken(),
        }
      }).then(resp => {
      let callerIds = resp.data.map(x => x);
      console.log(callerIds);
      if (callerIds.length === 0) {
        this.setState({
          caller_ids: undefined,
        })
      } else {
        this.setState({
          caller_ids: callerIds,
        })
      }
    }).catch(err => {
      console.log(err)
    });
  }

  deleteCallerID(id) {
    const deleteCallerIdUrl = Env.getURL("/api/v1.0/admin/caller-id/" + id);
    axios.delete(deleteCallerIdUrl,
      {
        headers: {
          Authorization: this.getSessionToken(),
        }
      }).then(resp => {
      this.getCallerIdsHttpRequest();
    }).catch(err => {
    });
  }

  renderCallerIdList() {
    let callerIds;
    if (this.state.caller_ids !== undefined && this.state.caller_ids !== null) {
      callerIds = this.state.caller_ids.map(ci =>
        <tr>
          <td>{ci.id}</td>
          <td>{ci.code}</td>
          <td className="text-left">{ci.description}</td>
          <td>{ci.user_id}</td>
          {this.renderCallerIdBadge(ci.is_activated)}
          <td className="text-center">
            <Button onClick={e => this.deleteCallerID(ci.id)} color="link"
                    className="header-text btn-sm"><i className="icon-trash"/></Button>
          </td>
        </tr>
      );
      return callerIds;
    } else {
      callerIds = [];
      return callerIds;
    }
  }

  renderCallerIdBadge(state) {
    if (state === 1) {
      return <td><Badge color="success">Payment Success</Badge></td>
    } else {
      return <td><Badge color="danger">Payment Pending</Badge></td>
    }
  }


  render() {
    return (
      <Row>
        <Col md={12}>
          <Card>
            <CardBody>
              <h4 className="header-text">System Caller IDs</h4>
              <table className="custom-table">
                <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Caller ID</th>
                  <th scope="col">Description</th>
                  <th scope="col">User ID</th>
                  <th scope="col">Status</th>
                  <th scope="col">Configure</th>
                </tr>
                </thead>
                <tbody>
                {this.renderCallerIdList()}
                </tbody>
              </table>
              <br/>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default CallerId;
