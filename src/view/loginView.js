import React from 'react';
import {Col, Container, Form, Button, Row} from 'react-bootstrap';
import '../css/login.css';
const autobind = require('class-autobind').default;

export default class LoginView extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
        autobind(this);
    }
    render() {
        return <Container className="login-page">
            <Col sm={{ span: 4, offset: 4 }}>
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formUsername">
                        <Form.Label className="fs-4" column sm={3}>
                            Username
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control size="lg" type="text" placeholder="Enter Your Username" />
                        </Col>
                    </Form.Group>
                    <br />
                    <Form.Group as={Row} className="mb-3" controlId="formPassword">
                        <Form.Label className="fs-4" column sm={3}>
                            Password
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control size="lg" type="password" placeholder="Enter Your Password" />
                        </Col>
                    </Form.Group>
                    <br />
                    <Form.Group as={Row} className="mb-3 justify-content-around">
                        <Col md="auto">
                            <Button size="lg" variant="primary" type="submit">Sign in</Button>
                        </Col>
                        <Col md="auto">
                            <Button size="lg" variant="outline-primary" type="submit">Sign up</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Col>
        </Container>;
    }
}