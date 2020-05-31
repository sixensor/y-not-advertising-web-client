import React, {Component} from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  Row
} from 'reactstrap';
import axios from "axios";
import ModalHeader from "reactstrap/es/ModalHeader";
import Badge from "reactstrap/es/Badge";

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      first_name: '',
      last_name: '',
      phone: '',
      email: '',
      is_registered: 0,
      is_activated: 0,
      is_verified: 0,
      profile_image: '',
      role: 1,
      address_line_one: '',
      address_line_two: '',
      city: '',
      country: '',
      is_error_popup: false,
      pn_verify_popup: false,
      pn_verification_code: '',
      pn_verification_msg: '',
      pn_verification_err: '',
      is_enable_req_btn: true,
    };
  }


  // Get current session bearer token
  getBearerToken() {
    let session = JSON.parse(localStorage.getItem('Session'));
    if (!session) {
      this.props.history.push('/login');
    }
    return 'Bearer ' + session.token
  }


  // Initialize the components
  componentDidMount() {
    let getUserUrl = "http://167.99.174.148:8001/api/v1.0/user/profile";
    // get user details call
    axios.get(getUserUrl,
      {
        headers: {
          Authorization: this.getBearerToken(),
        }
      }).then(resp => {
      this.setState({
        first_name: resp.data.first_name,
        last_name: resp.data.last_name,
        phone: resp.data.phone,
        email: resp.data.email,
        is_registered: resp.data.is_registered,
        is_activated: resp.data.is_activated,
        is_verified: resp.data.is_verified,
        profile_image: resp.data.profile_image,
        role: resp.data.role,
        address_line_one: resp.data.address_line_one,
        address_line_two: resp.data.address_line_two,
        city: resp.data.city,
        country: resp.data.country,
      })
    }).catch(err => {
      this.setState({
        is_error_popup: true,
      })
    });
  }


  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(JSON.stringify(this.state))
  }

  closeErrorPopup(e) {
    this.setState({
      is_error_popup: false,
    })
  }

  openPhoneNumberVerifyPopup() {
    this.setState({
      pn_verify_popup: true,
    })
  }

  closePhoneNumberVerifyPopup(e) {
    this.setState({
      pn_verify_popup: false,
    })
  }

  // Verify the user account using verification code
  verifyAccount(e) {
    let verifyAccountUrl = 'http://167.99.174.148:8001/api/v1.0/user/profile/verify'
    axios.post(verifyAccountUrl, {
        code: this.state.pn_verification_code,
      },
      {
        headers: {
          Authorization: this.getBearerToken(),
        }
      }).then(resp => {
      this.componentDidMount();
      this.closePhoneNumberVerifyPopup(e)

    }).catch(err => {
      console.log(err.response.message)
      this.setState({
        pn_verification_msg: '',
        pn_verification_err: err.response.data.message,
      })
    });
  }

  // Verification code request by the user
  // To verify the code
  verificationCodeRequest() {
    // Enable the verification code request button
    this.setState({
      is_enable_req_btn: false,
    })
    // verification code request HTTP request
    let verificationCodeRequestUrl = "http://167.99.174.148:8001/api/v1.0/user/profile/verification-request";
    axios.post(verificationCodeRequestUrl, null,
      {
        headers: {
          Authorization: this.getBearerToken(),
        }
      }).then(resp => {
      this.setState({
        pn_verification_err:'',
        pn_verification_msg: resp.data.message,
      })
    }).catch(err => {
      console.log(err.response)
    });

    // Enable the verification code request button
    this.setState({
      is_enable_req_btn: true,
    })
  }

  // Verification code request button
  verificationCodeRequestBtn() {
    if (this.state.is_enable_req_btn) {
      return (<Button color="primary" onClick={e => this.verificationCodeRequest(e)}>Request New Code</Button>);
    } else {
      return (
        <Button color="primary" onClick={e => this.verificationCodeRequest(e)} disabled>Request New Code</Button>);
    }
  }


  activationVisibility() {
    if (this.state.is_verified === 1) {
      return (
        <Badge color="success">Verified</Badge>
      )
    } else {
      return (
        <Badge onClick={e => this.openPhoneNumberVerifyPopup(e)} color="danger">Click here to verify your phone
          number</Badge>
      )
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg="2"/>
          <Col xs="12" md="12" lg="8">
            <Card>
              <CardHeader>
                <strong>Your Profile</strong>
                <small> Form</small>
              </CardHeader>
              <CardBody>
                <Form onSubmit={e => this.onSubmitRegisterForm(e)}>
                  {/*Names */}
                  <Row>
                    <Col xs="6">
                      <FormGroup className="mb-12">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input type="text" onChange={e => this.onChange(e)} value={this.state.first_name}
                               id="firstName"
                               name="first_name"
                               placeholder="First name" autoComplete="first_name" required/>
                      </FormGroup>
                      <FormGroup className="mb-12">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input type="text" onChange={e => this.onChange(e)} value={this.state.last_name}
                               id="lastName"
                               name="last_name"
                               placeholder="Last Name" autoComplete="last_name" required/>
                      </FormGroup>
                      <FormGroup className="mb-12">
                      </FormGroup>
                    </Col>
                    <Col xs="6">
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="12">
                      <FormGroup className="mb-3">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input type="text" onChange={e => this.onChange(e)} value={this.state.phone}
                               id="phone"
                               name="phone"
                               placeholder="Phone number" autoComplete="phone" disabled/>
                        {this.activationVisibility()}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="12">
                      <FormGroup className="mb-3">
                        <Label htmlFor="email">E-mail</Label>
                        <Input type="text" onChange={e => this.onChange(e)} value={this.state.email}
                               id="email"
                               name="email"
                               placeholder="E-mail" autoComplete="email" disabled/>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="6">
                      <FormGroup className="mb-12">
                        <Label htmlFor="addressLineOne">Address Line 1</Label>
                        <Input type="text" onChange={e => this.onChange(e)} value={this.state.address_line_one}
                               id="addressLineOne"
                               name="address_line_one"
                               placeholder="Address line 1" autoComplete="address" required/>
                      </FormGroup>
                    </Col>
                    <Col xs="6">
                      <FormGroup className="mb-12">
                        <Label htmlFor="addressLineTwo">Address Line 2</Label>
                        <Input type="text" onChange={e => this.onChange(e)} value={this.state.address_line_two}
                               id="addressLineTwo"
                               name="address_line_two"
                               placeholder="Address line 2" autoComplete="address"/>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="6">
                      <FormGroup className="mb-12">
                        <Label htmlFor="city">City</Label>
                        <Input type="text" onChange={e => this.onChange(e)} value={this.state.city}
                               id="city"
                               name="city"
                               placeholder="City" autoComplete="city" required/>
                      </FormGroup>

                    </Col>
                    <Col xs="6">
                      <FormGroup className="mb-12">
                        <Label htmlFor="country">Country</Label>
                        <Input type="text" onChange={e => this.onChange(e)} value={this.state.country}
                               id="country"
                               name="country"
                               placeholder="Country" autoComplete="country"/>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Button color="dark" type="submit">Save</Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Modal isOpen={this.state.is_error_popup} centered>
          <ModalHeader>
            <h4>Error</h4>
          </ModalHeader>
          <ModalBody>
            <p>Unavoidable error! Please refresh the page or retry !</p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={e => this.closeErrorPopup(e)}>Close</Button>
          </ModalFooter>
        </Modal>


        <Modal isOpen={this.state.pn_verify_popup} centered>
          <ModalHeader>
            <h4>Verify Your Phone Number </h4>
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup className="mb-12">
                <Label htmlFor="pn_verification_code">Enter your code</Label>
                <Input type="text" onChange={e => this.onChange(e)} value={this.state.pn_verification_code}
                       id="pn_verification_code"
                       name="pn_verification_code"
                       placeholder="XXXX"/>
              </FormGroup>
              <Badge color="dark">{this.state.pn_verification_msg}</Badge>
              <Badge color="dark">{this.state.pn_verification_err}</Badge>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={e => this.verifyAccount(e)}>Verify</Button>
            {this.verificationCodeRequestBtn()}
            <Button color="default" onClick={e => this.closePhoneNumberVerifyPopup(e)}>Close</Button>
          </ModalFooter>
        </Modal>

      </div>
    );
  }
}

export default Profile;
