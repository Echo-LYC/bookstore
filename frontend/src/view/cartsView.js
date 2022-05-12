import React from 'react';
import {Button, Card, Col, Container, Form, InputGroup, ListGroup, Row} from 'react-bootstrap';
import HeaderInfo from '../components/headerInfo';
import SideBar from '../components/sideBar';
import book1 from '../assets/book/book1.jpg';
import book2 from '../assets/book/book2.jpg';
import FixedImage from "../components/fixedImage";
const autobind = require('class-autobind').default;

export default class CartsView extends React.PureComponent {
  constructor (props) {
    super(props);
    // TODO: 库存为0的特殊处理，加个“无货”overlay，有货和无货分为两个list group，上面有货下面无货，无货只有删除按钮
    this.state = {
      carts: [{ // 加入购物车在数据库中insert，购买删除在数据库中delete，+-暂时在内存中更改number，之后可以考虑在数据库中update
        book: {
          bookId: '12345',
          img: book1,
          title: '红楼梦',
          author: '曹雪芹',
          price: 59.7,
          stock: 1037,
        }, // request get
        number: 1, // request get 作为post参数，购买以内存中number为准
        checked: false,
      },
      {
        book: {
          bookId: '11111',
          img: book2,
          title: '傲慢与偏见',
          author: '简奥斯汀',
          price: 18.5,
          stock: 3007,
        },
        number: 2,
        checked: false,
      }],
    }
    autobind(this)
  }

  componentDidMount () {
    const user = JSON.parse(localStorage.getItem('user'));
    // TODO: request get carts by user.id
  }

  setCart (i, what) {
    const v = this.state.carts.slice();
    v[i] = Object.assign(v[i], what);
    this.setState({carts: v});
  }

  render () {
    const allChecked = this.state.carts.map((x) => x.checked).reduce((s, x) => s && x, true);
    const totalPrice = this.state.carts.filter((x) => x.checked).reduce((s, x) => s + x.number * x.book.price, 0).toFixed(2);
    return <Container>
      <HeaderInfo/>
      <hr className="bordered-dashed"/>
      <Row>
        <Col sm={3}>
          <SideBar defaultActiveKey="/cart"/>
        </Col>
        <Col sm={9}>
          <Card>
            <Card.Header>
              <Form.Check type="radio" label="全选" className="text-black fs-5" checked={allChecked}
                onClick={() => {
                  const v = this.state.carts.slice();
                  v.map((x) => x.checked = !allChecked);
                  this.setState({carts: v});
                }}/>
            </Card.Header>
            <ListGroup variant="flush">
              {this.state.carts.map((x, i) => <ListGroup.Item key={i}>
                <Row>
                  <Col sm="auto">
                    <Form.Check type="radio" className="fs-5" checked={x.checked} onClick={() => {this.setCart(i, {checked: !x.checked})}}/>
                  </Col>
                  <Col sm="auto">
                    <FixedImage src={x.book.img} maxHeight={75} maxWidth={75}/>
                  </Col>
                  <Col>
                    <Row className="justify-content-between">
                      <Col md="auto">
                        <Row className="mb-2 text-black fs-5">
                          {x.book.title}
                        </Row>
                        <Row className="mb-2 text-muted fs-6">
                          {x.book.author}
                        </Row>
                      </Col>
                      <Col md="auto" className="text-danger fs-3">
                        ￥{x.book.price}
                      </Col>
                    </Row>
                  </Col>
                  <Col sm="auto">
                    <InputGroup className="mb-3">
                      <Button disabled={x.number === 1} variant="outline-secondary" onClick={() => {this.setCart(i, {number: x.number - 1})}}>-</Button>
                      <InputGroup.Text style={{backgroundColor: '#FFFFFF'}}>{x.number}</InputGroup.Text> {/* TODO: 有空改成input控件 */}
                      <Button variant="outline-secondary" onClick={() => {this.setCart(i, {number: x.number + 1})}}>+</Button>
                    </InputGroup>
                  </Col>
                </Row>
              </ListGroup.Item>)}
            </ListGroup>
            <Card.Footer>
              <Row className="justify-content-end">
                <Col md="auto" className="text-danger fs-2">￥{totalPrice}</Col>
                <Col md="auto">
                  <Button size="lg" variant="danger">购买</Button>
                </Col>
                <Col md="auto">
                  <Button size="lg" variant="outline-danger">删除</Button>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  }
}
