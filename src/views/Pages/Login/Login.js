import React, {Component} from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from 'reactstrap';
import {Link} from 'react-router-dom';
import axios from 'axios'
import '../../../assets/dashboard-scss/style.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      err_status: false,
      err_message: '',
    };
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmitLoginForm(e) {
    const loginUrl = "http://167.99.174.148:8001/api/v1.0/login";
    e.preventDefault();
    axios.post(loginUrl, {
      email: this.state.email,
      password: this.state.password
    }).then(resp => {
      localStorage.setItem('Session', JSON.stringify(resp.data))
      this.props.history.push('/dashboard')
    }).catch(err => {
      console.log(err.response.data)
      let message = '';
      if (err.response.data.code === 100) {
        message = 'Invalid credentials.'
      }
      this.setState({
        err_status: true,
        err_message: message,
      })
    })
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <Row>
                <Col md="12">
                  <span className="clearfix">
                    <h3 className="header-text">Y-Not Advertising</h3>
                    <h4 className="pt-3"></h4>
                  </span>
                  <Link to="/home">
                    <Button color="link" className="mt-3 header-text" active tabIndex={-1}>Go To Home</Button>
                  </Link>
                </Col>
              </Row>
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={e => this.onSubmitLoginForm(e)}>
                      <h1>Login</h1>
                      <p className="text-muted content-text">Sign In to your account</p>
                      <InputGroup className="mb-3 content-text">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input onChange={e => this.onChange(e)} value={this.state.email} name="email" type="email"
                               placeholder="Email" autoComplete="email"/>
                      </InputGroup>
                      <InputGroup className="mb-4 content-text">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input onChange={e => this.onChange(e)} value={this.state.password} name="password"
                               type="password" placeholder="Password" autoComplete="current-password"/>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <Badge hidden={!this.state.err_status} color="danger">{this.state.err_message}</Badge>
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="dark" className="px-4  float-left header-text">Login</Button>
                        </Col>
                        <Col xs="6">
                          <Link to="/register">
                            <Button color="link" className="mt-3 float-right header-text" active tabIndex={-1}>Register
                              Now!</Button>
                          </Link>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md="8">
              <div className="credits ml-auto content-text">
                <span className="copyright">
                  © {new Date().getFullYear()} Y-Not Advertising
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
