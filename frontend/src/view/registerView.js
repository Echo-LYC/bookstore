import React from 'react'
import {Col, Container, Form, Button, Row, InputGroup, FormControl, Alert} from 'react-bootstrap'
import {history} from '../router/router';
import {request} from "../util/Ajax";
const autobind = require('class-autobind').default;

export default class RegisterView extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      validated: false,
      showAlert: false,
      alertMessage: '',
    };
    autobind(this)
  }

  handleRegister (e) {
    this.setState({validated: true});
    e.preventDefault();
    e.stopPropagation();
    const form = e.currentTarget;
    if (form.checkValidity() === false || this.state.confirmPassword !== this.state.password) return;
    const data = {
      "username": this.state.username,
      "password": this.state.password,
      "email": this.state.email,
    };
    request("/register", "POST", data)
        .then((res) => {
          if (res.ok) {
            window.location.replace(document.referrer);
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
        <Form noValidate validated={this.state.validated} onSubmit={this.handleRegister}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label className="fs-5" column sm={3}>
                            用户名
            </Form.Label>
            <Col sm={9}>
              <Form.Control required size="lg" type="text" placeholder="Enter Username" value={this.state.username}
                onChange={(e) => this.setState({username: e.target.value})}/>
              <Form.Control.Feedback type="invalid">Please input a username!</Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label className="fs-5" column sm={3}>
                            密码
            </Form.Label>
            <Col sm={9}>
              <Form.Control required size="lg" type="password" placeholder="Enter Password" value={this.state.password}
                onChange={(e) => this.setState({password: e.target.value})}/>
              <Form.Control.Feedback type="invalid">Please input a password!</Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label className="fs-5" column sm={3}>
              确认密码
            </Form.Label>
            <Col sm={9}>
              <Form.Control size="lg" type="password" placeholder="Confirm Password"
                isInvalid={this.state.confirmPassword !== this.state.password} value={this.state.confirmPassword}
                onChange={(e) => this.setState({confirmPassword: e.target.value})}/>
              <Form.Control.Feedback type="invalid">Please input the same password!</Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label className="fs-5" column sm={3}>
              邮箱
            </Form.Label>
            <Col sm={9}>
              <Form.Control required size="lg" type="email" placeholder="name@example.com" value={this.state.email}
                onChange={(e) => this.setState({email: e.target.value})}/>
              <Form.Control.Feedback type="invalid">Please input a valid email!</Form.Control.Feedback>
            </Col>
          </Form.Group>
          <br />
          <Form.Group as={Row} className="mb-3 justify-content-around">
            <Col sm={3}>
              <Button size="lg" className="w-100" variant="outline-primary" onClick={() => history.back()}>取消</Button>
            </Col>
            <Col sm={3}>
              <Button size="lg" className="w-100" variant="primary" type="submit">注册</Button>
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
