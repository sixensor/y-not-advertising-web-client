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







class Users extends Component {
  render() {
    const userList = usersData.filter((user) => user.id)
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
                      <th scope="col">ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Phone Number</th>
                      <th scope="col">Status</th>
                      <th scope="col">Role</th>
                    </tr>
                  </thead>
                  <tbody>
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
