import React from 'react'
import {Col, Container, Form, Button, Row, Alert} from 'react-bootstrap'
import {request} from "../Util/Ajax";
import {history} from "../router/router";
const autobind = require('class-autobind').default

export default class LoginView extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      validated: false,
      showAlert: false,
      alertMessage: '',
    };
    autobind(this);
  }

  handleLogin (e) {
    this.setState({validated: true});
    e.preventDefault();
    e.stopPropagation();
    const form = e.currentTarget;
    if (form.checkValidity() === false) return;
    const data = {
      "username": this.state.username,
      "password": this.state.password,
    };
    request("/login", "POST", data)
        .then((res) => {
          if (res.ok) {
            console.log(res.data);
            // localStorage.setItem("user", JSON.stringify(res.data));
            history.back();
          } else {
            throw new Error(JSON.stringify(res.data));
          }
        }).catch((e) => {
          this.setState({showAlert: true, alertMessage: e.message});
        });
  }

  render () {
    return <Container style={{paddingTop: 200}}>
      <Col sm={{ span: 4, offset: 4 }}>
        <Form noValidate validated={this.state.validated} onSubmit={this.handleLogin}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label className="fs-4" column sm={3}>
                            Username
            </Form.Label>
            <Col sm={9}>
              <Form.Control required size="lg" type="text" placeholder="Enter Your Username" value={this.state.username}
                onChange={(e) => this.setState({username: e.target.value})}/>
              <Form.Control.Feedback type="invalid">Please input your username!</Form.Control.Feedback>
            </Col>
          </Form.Group>
          <br />
          <Form.Group as={Row} className="mb-3">
            <Form.Label className="fs-4" column sm={3}>
                            Password
            </Form.Label>
            <Col sm={9}>
              <Form.Control required size="lg" type="password" placeholder="Enter Your Password" value={this.state.password}
                onChange={(e) => this.setState({password: e.target.value})}/>
              <Form.Control.Feedback type="invalid">Please input your password!</Form.Control.Feedback>
            </Col>
          </Form.Group>
          <br />
          <Form.Group as={Row} className="mb-3 justify-content-around">
            <Col md="auto">
              <Button size="lg" variant="primary" type="submit">Sign in</Button>
            </Col>
            <Col md="auto">
              <Button size="lg" variant="outline-primary" href='/register'>Sign up</Button>
            </Col>
          </Form.Group>
        </Form>
        {this.state.showAlert && <Alert variant="danger" onClose={() => this.setState({showAlert: false})} style={{position: 'sticky', bottom: '15px'}} dismissible>
          <Alert.Heading>You got an error!</Alert.Heading>
          <p>{this.state.alertMessage}</p>
        </Alert>}
      </Col>
    </Container>
  }
}
