import React, {Component} from 'react';
import GoogleLoginImage from "../../../assets/img/google/btn_google_signin_dark_normal_web@2x.png"
import {Button, Card, CardBody, CardGroup, Col, Container, Form, Row} from 'reactstrap';
import axios from "axios";


class Login extends Component {
  constructor(props) {
    super(props);
  }

  onSubmitLoginForm(e) {
    this.props.history.push('/signin')
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
                      <Row>
                        <Col lg="6">
                          <h2>Login</h2>
                          <p className="text-muted">Login to your account for create and manage your SMS campaigns.</p>
                        </Col>
                        <Col lg="6">
                          <Button color="link"><img src={GoogleLoginImage} height={50} alt="my image"/></Button>
                        </Col>
                      </Row>
                    </Form>
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
