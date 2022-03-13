import React from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import book1 from '../assets/book/book1.jpg'

export default class BookDetail extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return <Container>
      <Row>
        <Col sm={{ span: 4, offset: 1 }}>
          <Image style={{maxHeight: 400}} src={book1}/>
        </Col>
        <Col sm={4}>
          <Card style={{ width: '20rem' }}>
            <Card.Body>
              <Card.Title className="fs-2">红楼梦</Card.Title>
              <hr className="bordered-dashed"/>
              <Card.Title>作者：<span className="text-muted">曹雪芹</span></Card.Title>
              <Card.Title>分类：<span className="text-muted">小说</span></Card.Title>
              <Card.Title>定价：<span className="text-danger">￥59.7</span></Card.Title>
              <Card.Title>状态：有货 <span className="text-muted fs-6">库存1037件</span></Card.Title>
              <Card.Text>
                <span className="fs-5">作品简介：</span>
                                    《红楼梦》是一部百科全书式的长篇小说。以宝黛爱情悲剧为主线，以四大家族的荣辱兴衰为背景，描绘出18世纪中国封建社会的方方面面，以及封建专制下新兴资本主义民主思想的萌动。结构宏大、情节委婉、细节精致，堪称中国古代小说中的经典。
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br/>
      <Col sm={{ span: 6, offset: 3 }}>
        <Row className="justify-content-around">
          <Col>
            <Button size="lg" variant="danger" type="submit">加入购物车</Button>
          </Col>
          <Col>
            <Button size="lg" variant="outline-danger" type="submit">立即购买</Button>
          </Col>
        </Row>
      </Col>
    </Container>
  }
}
