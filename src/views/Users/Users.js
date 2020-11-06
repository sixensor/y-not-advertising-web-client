import React, {Component} from 'react';
import {Card, CardBody, Col, Modal, ModalBody, ModalFooter, Row} from 'reactstrap';

import Button from "reactstrap/lib/Button";
import Form from "reactstrap/lib/Form";
import FormGroup from "reactstrap/lib/FormGroup";
import Label from "reactstrap/lib/Label";
import Input from "reactstrap/lib/Input";
import './admin-system-users.css'
import axios from "axios";
import Badge from "reactstrap/lib/Badge";
import Env from "../Env/env"
import {AppSwitch} from "@coreui/react";


class Users extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users_data: undefined,
      no_items_alert: '',
      email: '',
      phone: '',
      is_active_cim: false,
      user_data: null,
      add_caller_id_string: "",
      add_caller_id_desc: ""
    };

    this.toggleCallerIdModel = this.toggleCallerIdModel.bind(this);
  }

  // Get current session bearer token
  getSessionToken() {
    let session = JSON.parse(localStorage.getItem('Session'));
    if (!session) {
      this.props.history.push('/login');
    }
    return 'Bearer ' + session.token
  }

  componentDidMount() {
    this.getUsersHttpRequest()
  }


  renderUserStatusBadge(isVerified, isRegistered) {
    if (isVerified === 1 && isRegistered === 1) {
      return (
        <section>
          <Badge color="success">Verified</Badge>
          <br/>
          <Badge color="success">Registered</Badge>
        </section>)
    } else if (isVerified === 1) {
      return (
        <section>
          <Badge color="success">Verified</Badge>
          <br/>
          <Badge color="danger">Not Registered</Badge>
        </section>)
    } else if (isRegistered === 1) {
      return (
        <section>
          <Badge color="success">Registered</Badge>
          <br/>
          <Badge color="danger">Not Verified</Badge>
        </section>)
    } else {
      return (
        <section>
          <Badge color="danger">Not Verified</Badge>
          <br/>
          <Badge color="danger">Not Registered</Badge>
        </section>
      )
    }
  }

  renderRoleBadge(role) {
    if (role === 2) {
      return (<section>
        <Badge color="light">ADMIN</Badge>
      </section>)
    } else {
      return (<section>
        <Badge color="light">USER</Badge>
      </section>)
    }
  }

  deleteCallerIDHttpRequest(id) {
    const deleteCallerIdUrl = Env.getURL("/api/v1.0/admin/caller-id/" + id);
    axios.delete(deleteCallerIdUrl,
      {
        headers: {
          Authorization: this.getSessionToken(),
        }
      }).then(resp => {
      this.toggleCallerIdModel();
      this.getUsersHttpRequest()
    }).catch(err => {
    });
  }

  addCallerIDHttpRequest(userId, callerIdString, callerIdDesc) {
    const deleteCallerIdUrl = Env.getURL("/api/v1.0/admin/user/" + userId + "/caller-id/add");
    axios.post(deleteCallerIdUrl, {
        code: callerIdString,
        description: callerIdDesc
      },
      {
        headers: {
          Authorization: this.getSessionToken(),
        }
      }).then(resp => {
      this.cleanAddCallerID();
      this.getUsersHttpRequest();
    }).catch(err => {
    });
  }

  cleanAddCallerID() {
    this.setState({
      add_caller_id_string: "",
      add_caller_id_desc: ""
    })
  }

  renderCallerIds(idNotIn) {
    let callerIdList = [];
    if (this.state.user_data === null) {
      return callerIdList
    }
    let callerIds = this.state.user_data.caller_ids;
    if (callerIds !== undefined && callerIds !== null) {

      callerIdList = callerIds.map(function (ci, i) {
        if (idNotIn !== ci.id || idNotIn === 0) {
          return (
            <tr>
              <td>{ci.id}</td>
              <td>{ci.code}</td>
              <td>{ci.description}</td>
              <td>
                <Button color="danger" size="sm" lassName="mr-5" onClick={e => this.deleteCallerIDHttpRequest(ci.id)}>
                  <i className="fa fa-trash"/> Delete
                </Button>
              </td>
            </tr>
          )
        }
      }.bind(this));
      return callerIdList;
    } else {
      callerIdList = [];
      return callerIdList;
    }
  }

  getUsersHttpRequest() {
    const usersRequestsUrl = Env.getURL("/api/v1.0/admin/users?phone=" + this.state.phone + "&email=" + this.state.email);
    axios.get(usersRequestsUrl,
      {
        headers: {
          Authorization: this.getSessionToken(),
        }
      }).then(resp => {
      let users = resp.data.map(x => x);
      console.log(users);
      if (users.length === 0) {
        this.setState({
          users_data: undefined,
          no_items_alert: ''
        })
      } else {
        this.setState({
          users_data: users,
          no_items_alert: ''
        })
      }
    }).catch(err => {
    });
  }

  changeStatusHttpRequest(userId, status) {
    const changeStatusRequestsUrl = Env.getURL("/api/v1.0/admin/user/0/status");
    axios.post(changeStatusRequestsUrl,
      {
        id: userId,
        status: status,
      },
      {
        headers: {
          Authorization: this.getSessionToken(),
        }
      }).then(resp => {
      this.getUsersHttpRequest();
    }).catch(err => {
    });
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onUserActivateToggleChange(e, id) {
    let status = 0;
    if (e.target.checked === true) {
      status = 1;
    } else {
      status = 0;
    }
    this.changeStatusHttpRequest(id, status);
  }

  toggleCallerIdModel(e) {
    this.setState({
      is_active_cim: !this.state.is_active_cim,
    });
  }

  openCallerIDModel(user) {
    this.setState({
      is_active_cim: true,
      user_data: user
    });
  }

  renderUserDetails() {
    let name = "";
    if (this.state.user_data === null) {
      return name
    } else {
      return (
        <table>
          <tbody>
          <tr>
            <td><strong>Id</strong></td>
            <td>{this.state.user_data.id}</td>
          </tr>
          <tr>
            <td><strong>Name</strong></td>
            <td>{this.state.user_data.first_name} {this.state.user_data.last_name}</td>
          </tr>
          </tbody>
        </table>
      )
    }
  }

  renderUserList() {
    let users;
    if (this.state.users_data !== undefined && this.state.users_data !== null) {
      users = this.state.users_data.map(user =>
        <tr>
          <td>{user.id}</td>
          <td>{user.first_name} {user.last_name}</td>
          <td className="text-left">{user.phone}</td>
          <td>{this.renderUserStatusBadge(this.is_verified, this.is_registered)}</td>
          <td>{this.renderRoleBadge(user.role)}</td>
          <td><AppSwitch className={'mx-1'} variant={'pill'} color={'primary'}
                         name = "activeStatusToggle"
                         onChange={e => this.onUserActivateToggleChange(e, user.id)}
                         checked={this.getToggleStatus(user.is_activated)}/></td>
          <td>
            <Button color="dark" size="sm" onClick={e => this.openCallerIDModel(user)} className="mr-5">
              <i className="fa fa-gear"/> Caller IDs
            </Button>
          </td>
        </tr>
      );
      return users;
    } else {
      users = [];
      return users;
    }
  }

  getToggleStatus(isActivated) {
    return isActivated === 1
  }


  addCallerIdFormSubmit(e) {
    e.preventDefault();
    this.addCallerIDHttpRequest(this.state.user_data.id, this.state.add_caller_id_string, this.state.add_caller_id_desc);
    this.toggleCallerIdModel(e);
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Card>
              <CardBody>
                <h4 className="header-text">System Users</h4>
                <br/>
                <Form className="filter-font">
                  <Row>
                    <Col md={3}>
                      <FormGroup>
                        <Label htmlFor="email">E mail</Label>
                        <Input onChange={e => this.onChange(e)} id="email" name="email" type="email"
                               placeholder="E mail" autoComplete="email"/>
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup>
                        <Label htmlFor="phone">Phone</Label>
                        <Input onChange={e => this.onChange(e)} id="phone" name="phone" type="phone"
                               placeholder="Phone Number" autoComplete="phone"/>
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
                <table className="custom-table">
                  <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Status</th>
                    <th scope="col">Role</th>
                    <th scope="col">Activate/Deactivate</th>
                    <th scope="col"/>
                  </tr>
                  </thead>
                  <tbody>
                  {this.renderUserList()}
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Modal isOpen={this.state.is_active_cim} toggle={this.toggleCallerIdModel}
               className={'modal-dark ' + this.props.className} centered>
          <ModalBody>
            <h5 className="header-text">Manage Caller IDs</h5>
            <br/>
            <h6 className="header-text"> User Details </h6>
            <div className="container">{this.renderUserDetails()}</div>
            <br/>
            <h6 className="header-text"> Caller IDs</h6>
            <table className="custom-table">
              <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Code</th>
                <th scope="col">Description</th>
                <th scope="col"/>
              </tr>
              </thead>
              <tbody>
              {this.renderCallerIds(0)}
              </tbody>
            </table>
            <br/>
            <h6 className="header-text"> Add Caller ID</h6>
            <Form onSubmit={e => this.addCallerIdFormSubmit(e)}>
              <FormGroup>
                <Label>Call ID String</Label>
                <Input type="text"
                       name="add_caller_id_string"
                       id="addCallerIdString"
                       onChange={e => this.onChange(e)} value={this.state.add_caller_id_string}/>
              </FormGroup>
              <FormGroup>
                <Label>Description</Label>
                <Input type="text"
                       name="add_caller_id_desc"
                       id="addCallerIdDesc"
                       onChange={e => this.onChange(e)} value={this.state.add_caller_id_desc}/>
              </FormGroup>
              <Button type="submit" color="dark" className="btn-sm">Add</Button>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="light" size="sm" onClick={this.toggleCallerIdModel}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default Users;
