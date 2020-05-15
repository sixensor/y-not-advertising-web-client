import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {
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
  Row
} from 'reactstrap';
import axios from 'axios'


class Login extends Component {


  constructor(props) {
    super(props);

    /**
     * Initialize the status.
     * @type {{password: string, email: string}}
     */
    this.state = {
      email: '',
      password: '',
    };
  }

  /**
   * Set status parameters on change
   * @param e
   */
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  /**
   * Submit login form
   * @param e
   */
  onSubmitLoginForm(e) {
    const loginUrl = "http://167.99.174.148:8001/api/v1.0/login";
    e.preventDefault();
    axios.post(loginUrl, {
      email: this.state.email,
      password: this.state.password
    }).then(resp => {
      localStorage.setItem('Session', JSON.stringify(resp.data))
      this.props.history.push('/dashboard')
    });
  }


  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={e => this.onSubmitLoginForm(e)}>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input onChange={e => this.onChange(e)} value={this.state.email} name="email" type="email"
                               placeholder="Email" autoComplete="email"/>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input onChange={e => this.onChange(e)} value={this.state.password} name="password"
                               type="password" placeholder="Password" autoComplete="current-password"/>
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4">Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{width: '44%'}}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Register</h2>
                      <p></p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
