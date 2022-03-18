import React from 'react'
import {Button, Card, Col, Container, Image, Row} from 'react-bootstrap'
import PropTypes from 'prop-types';
import SideBar from '../components/sideBar'
import HeaderInfo from '../components/headerInfo'
import {DEFAULT_COVER} from './bookEditorView';
const autobind = require('class-autobind').default

export default class BookView extends React.PureComponent {
  constructor (props) {
    super(props)
    const user = JSON.parse(localStorage.getItem('user'))
    this.state = {
      auth: user.auth,
      img: DEFAULT_COVER,
      title: '',
      author: '',
      ISBN: '',
      price: 0,
      stock: 0,
      synopsis: '',
    }
    autobind(this)
  }

  componentDidMount () {
    // TODO: request get book detail by id
  }

  render () {
    const isAdmin = this.state.auth === 'ROLE_ADMINISTRATOR';
    return <Container>
      <HeaderInfo/>
      <hr className="bordered-dashed"/>
      <Row>
        <Col sm={3}>
          <SideBar defaultActiveKey="/home"/>
        </Col>
        <Col sm={{ span: 7, offset: 1 }}>
          <Row className="justify-content-around">
            <Col md="auto">
              <Image style={{maxWidth: 300, maxHeight: 300}} src={this.state.img}/>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title className="fs-2">{this.state.title}</Card.Title>
                  <hr className="bordered-dashed"/>
                  <Card.Title>作者：<span className="text-muted">{this.state.author}</span></Card.Title>
                  <Card.Title>ISBN：<span className="text-muted">{this.state.ISBN}</span></Card.Title>
                  <Card.Title>定价：<span className="text-danger">￥{this.state.price}</span></Card.Title>
                  <Card.Title>状态：{this.state.stock ? '有货' : '无货'} <span className="text-muted fs-6">库存{this.state.stock}件</span></Card.Title>
                  <Card.Text>
                    <span className="fs-5">作品简介：</span>
                    {this.state.synopsis}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br/>
          {!isAdmin && <Row className="justify-content-around">
            <Col sm={3}>
              <Button size="lg" className="w-100" variant="danger">加入购物车</Button>
            </Col>
            <Col sm={3}>
              <Button size="lg" className="w-100" variant="outline-danger">立即购买</Button>
            </Col>
          </Row>}
          {isAdmin && <Row className="justify-content-around">
            <Col sm={3}>
              <Button size="lg" className="w-100" variant="outline-success" href={'/editor?id=' + this.props.id}>编辑图书详情</Button>
            </Col>
            <Col sm={3}>
              <Button size="lg" className="w-100" variant="danger">删除图书</Button>
            </Col>
          </Row>}
        </Col>
      </Row>
    </Container>
  }
}
BookView.propTypes = {
  id: PropTypes.string.isRequired
}
