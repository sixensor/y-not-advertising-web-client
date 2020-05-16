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
  Modal,
  ModalBody,
  ModalFooter,
  Row,
} from 'reactstrap';
import axios from "axios";


class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      phone: '',
      email: '',
      password: '',
      image: '',
      address_line_one: '',
      address_line_two: '',
      city: '',
      country: '',
      err_status: false,
      err_message: '',
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(JSON.stringify(this.state))
  }

  onSubmitRegisterForm(e) {
    const loginUrl = "http://167.99.174.148:8001/api/v1.0/register";
    e.preventDefault();
    axios.post(loginUrl, {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      phone: this.state.phone,
      email: this.state.email,
      password: this.state.password,
      image: this.state.image,
      address_line_one: this.state.address_line_one,
      address_line_two: this.state.address_line_two,
      city: this.state.city,
      country: this.state.country,
    }).then(resp => {
      this.props.history.push('/login')
    }).catch(err => {
      let message = '';
      if (err.response.data.code === 205) {
        message = 'Your `E-mail` or `Phone Number` already registered in Y-NOT Advertising.'
      }
      this.setState({
        err_status: true,
        err_message: message,
      })
    });
  }

  redirectLogin(e) {
    this.props.history.push('/login')
  }

  closeErrorPopup(e) {
    this.setState({
      err_status: false,
    })
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form onSubmit={e => this.onSubmitRegisterForm(e)}>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" onChange={e => this.onChange(e)} value={this.state.first_name}
                             name="first_name"
                             placeholder="First name" autoComplete="first_name" required/>
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" onChange={e => this.onChange(e)} value={this.state.last_name} name="last_name"
                             placeholder="Last name" autoComplete="last_name" required/>
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-phone"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" onChange={e => this.onChange(e)} value={this.state.phone} name="phone"
                             placeholder="Phone number" autoComplete="phone" required/>
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-envelope"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" onChange={e => this.onChange(e)} value={this.state.email} name="email"
                             placeholder="E-mail" autoComplete="email" required/>
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-location-pin"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" onChange={e => this.onChange(e)} value={this.state.address_line_one}
                             name="address_line_one"
                             placeholder="Address line 1" autoComplete="address" required/>
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
                             placeholder="City" autoComplete="city" required/>
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

                    {/*<InputGroup className="mb-3">*/}
                    {/*  <Label for="profileImage">Profile Image</Label>*/}
                    {/*  <Input type="file" name="file" onChange={e => this.uploadProfileImage(e)} name="image"/>*/}
                    {/*</InputGroup>*/}

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" name="password" placeholder="Password" onChange={e => this.onChange(e)} value={this.state.password}  required/>
                    </InputGroup>

                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Repeat password"  required/>
                    </InputGroup>
                    <Button color="danger" block>Create Account</Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        <Modal isOpen={this.state.err_status}>
          <ModalBody>
            <p>{this.state.err_message}</p>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={e => this.redirectLogin(e)}>Login</Button>
            <Button color="danger" onClick={e => this.closeErrorPopup(e)}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Register;
