import React from 'react'
import { Col, Image, Nav, Row } from 'react-bootstrap'
import logo from '../assets/logo.png'

export default class HeaderInfo extends React.PureComponent {
  constructor (props) {
    super(props)
    const user = JSON.parse(localStorage.getItem('user'))
    this.state = {
      userInfo: user.userInfo
    }
  }

  render () {
    return <Row className="justify-content-between">
      <Col md="auto">
        <Nav defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link className="fs-4 text-muted" href="/home">
              <Image width={50} height={50} src={logo}/>
                            Bookstore
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
      <Col md="auto">
        <Nav defaultActiveKey="/login">
          <Nav.Item>
            <Nav.Link className="text-muted fs-5" href="/login">
              {this.state.userInfo.username}{' '}
              {this.state.userInfo.img && <Image roundedCircle={50} width={50} height={50} src={this.state.userInfo.img}/>}
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
    </Row>
  }
}
