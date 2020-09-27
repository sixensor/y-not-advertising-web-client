import React, {Component} from 'react';
import {Card, CardBody, Col, Row} from 'reactstrap';

import Button from "reactstrap/lib/Button";
import Form from "reactstrap/lib/Form";
import FormGroup from "reactstrap/lib/FormGroup";
import Label from "reactstrap/lib/Label";
import Input from "reactstrap/lib/Input";
import './admin-system-users.css'
import axios from "axios";
import Badge from "reactstrap/lib/Badge";
import Env from "../Env/env"


class Users extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users_data: undefined,
      no_items_alert: '',
      email: '',
      phone: '',
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
    this.getUsers()
  }

  getUserStatus(isVerified, isRegistered) {
    if (isVerified === 1 && isRegistered === 1) {
      return (
        <section>
          <Badge color="success">Verified</Badge>
          <Badge color="success">Registered</Badge>
        </section>)
    } else if (isVerified === 1) {
      return (
        <section>
          <Badge color="success">Verified</Badge>
          <Badge color="danger">Not Registered</Badge>
        </section>)
    } else if (isRegistered === 1) {
      return (
        <section>
          <Badge color="success">Registered</Badge>
          <Badge color="danger">Not Verified</Badge>
        </section>)
    } else {
      return (
        <section>
          <Badge color="danger">Not Verified</Badge>
          <Badge color="danger">Not Registered</Badge>
        </section>
      )
    }
  }

  getRole(role) {
    if (role === 2){
      return(<section>
        <Badge color="light">ADMIN</Badge>
      </section>)
    }else {
      return(<section>
        <Badge color="light">USER</Badge>
      </section>)
    }
  }

  getUsers() {
    const usersRequestsUrl = Env.getURL("/api/v1.0/admin/users?phone=" + this.state.phone + "&email=" + this.state.email);
    axios.get(usersRequestsUrl,
      {
        headers: {
          Authorization: this.getBearerToken(),
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

  // Capture the parameters on change events
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    this.getUsers();
  }



  userList() {
    let users;
    if (this.state.users_data !== undefined && this.state.users_data !== null) {
      users = this.state.users_data.map(user =>
        <tr>
          <td>{user.id}</td>
          <td>{user.first_name} {user.last_name}</td>
          <td className="text-left">{user.phone}</td>
          <td>{this.getUserStatus(this.is_verified,this.is_registered)}</td>
          <td>{this.getRole(user.role)}</td>
        </tr>
      );
      return users;
    } else {
      users = [];
      return users;
    }
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
                  </tr>
                  </thead>
                  <tbody>
                  {this.userList()}
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Users;
