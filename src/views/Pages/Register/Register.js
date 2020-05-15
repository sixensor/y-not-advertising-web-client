import React, {Component} from 'react';
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from 'reactstrap';
import Label from "reactstrap/es/Label";

class Register extends Component {

  /**
   * Initialize the status of the application
   * @param props
   */
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      email: '',
      password: '',
      image: '',
      address_line_one: '',
      address_line_two: '',
      city: '',
      country: '',
    }
  }

  /**
   * Set status parameters on change
   * @param e
   */
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(JSON.stringify(this.state))
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" onChange={e => this.onChange(e)} value={this.state.name} name="name"
                             placeholder="Full name" autoComplete="username"/>
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-phone"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" onChange={e => this.onChange(e)} value={this.state.phone} name="phone"
                             placeholder="Phone number" autoComplete="phone"/>
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-envelope"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" onChange={e => this.onChange(e)} value={this.state.email} name="email"
                             placeholder="E-mail" autoComplete="email"/>
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-location-pin"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" onChange={e => this.onChange(e)} value={this.state.address_line_one}
                             name="address_line_one"
                             placeholder="Address line 1" autoComplete="address"/>
                    </InputGroup>


                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-location-pin"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" onChange={e => this.onChange(e)} value={this.state.address_line_two}
                             name="address_line_two"
                             placeholder="Address line 2" autoComplete="address"/>
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-location-pin"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" onChange={e => this.onChange(e)} value={this.state.city}
                             name="city"
                             placeholder="City" autoComplete="city"/>
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-location-pin"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" onChange={e => this.onChange(e)} value={this.state.country}
                             name="country"
                             placeholder="Country" autoComplete="country"/>
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <Label for="profileImage">Profile Image</Label>
                      <Input type="file" name="file"  onChange={e => this.onChange(e)} name="image"/>
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" autoComplete="new-password"/>
                    </InputGroup>

                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Repeat password" autoComplete="new-password"/>
                    </InputGroup>
                    <Button color="danger" block>Create Account</Button>
                  </Form>
                </CardBody>
                {/*<CardFooter className="p-4">*/}
                {/*  <Row>*/}
                {/*    <Col xs="12" sm="6">*/}
                {/*      <Button className="btn-facebook mb-1" block><span>facebook</span></Button>*/}
                {/*    </Col>*/}
                {/*    <Col xs="12" sm="6">*/}
                {/*      <Button className="btn-twitter mb-1" block><span>twitter</span></Button>*/}
                {/*    </Col>*/}
                {/*  </Row>*/}
                {/*</CardFooter>*/}
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
