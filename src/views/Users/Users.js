import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import Button from "reactstrap/lib/Button";
import Form from "reactstrap/lib/Form";
import FormGroup from "reactstrap/lib/FormGroup";
import Label from "reactstrap/lib/Label";
import Input from "reactstrap/lib/Input";
import './admin-system-users.css'

import usersData from './UsersData'

function UserRow(props) {
  const user = props.user
  const userLink = `/users/${user.id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
    <tr key={user.id.toString()}>
      <td scope="row">{user.id}</td>
      <td>{user.name}</td>
      <td>{user.registered}</td>
      <td>{user.role}</td>
      <td>{user.status}</td>
    </tr>
  )
}

class Users extends Component {

  render() {

    const userList = usersData.filter((user) => user.id < 10)

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
                <table className="custom-table" >
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">name</th>
                      <th scope="col">registered</th>
                      <th scope="col">role</th>
                      <th scope="col">status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userList.map((user, index) =>
                      <UserRow key={index} user={user}/>
                    )}
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
