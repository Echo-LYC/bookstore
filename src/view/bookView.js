import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SideBar from '../components/sideBar'
import HeaderInfo from '../components/headerInfo'
import BookDetail from '../components/bookDetail'

export default class BookView extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return <Container>
            <HeaderInfo/>
            <hr className="bordered-dashed"/>
            <Row>
                <Col sm={3}>
                    <SideBar defaultActiveKey="/home"/>
                </Col>
                <Col sm={9}>
                    <BookDetail/>
                </Col>
            </Row>
        </Container>
  }
}
