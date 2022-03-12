import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SideBar from '../components/sideBar'
import HeaderInfo from '../components/headerInfo'
import SearchBar from '../components/searchBar'
import BookCarousel from '../components/bookCarousel'
import BookCard from '../components/bookCard'

export default class HomeView extends React.PureComponent {
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
                    <SearchBar/>
                    <Col sm={{ span: 10, offset: 1 }}>
                        <BookCarousel/>
                    </Col>
                    <br/>
                    <Row className="justify-content-around">
                        <Col md="auto">
                            <BookCard/>
                        </Col>
                        <Col md="auto">
                            <BookCard/>
                        </Col>
                        <Col md="auto">
                            <BookCard/>
                        </Col>
                        <Col md="auto">
                            <BookCard/>
                        </Col>
                    </Row>
                    <br/>
                    <Row className="justify-content-around">
                        <Col md="auto">
                            <BookCard/>
                        </Col>
                        <Col md="auto">
                            <BookCard/>
                        </Col>
                        <Col md="auto">
                            <BookCard/>
                        </Col>
                        <Col md="auto">
                            <BookCard/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
  }
}
