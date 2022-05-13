import React from 'react';
import {Alert, Button, Card, Col, Container, Form, InputGroup, ListGroup, Row} from 'react-bootstrap';
import HeaderInfo from '../components/headerInfo';
import SideBar from '../components/sideBar';
import FixedImage from "../components/fixedImage";
import {request} from "../util/Ajax";
import {DEFAULT_COVER} from "./bookEditorView";
const autobind = require('class-autobind').default;

// TODO: 库存为0的特殊处理，加个“无货”overlay，有货和无货分为两个list group，上面有货下面无货，无货只有删除按钮
// 加入购物车在数据库中insert，购买删除在数据库中delete，+-暂时在内存中更改number，之后可以考虑在数据库中update
export default class CartsView extends React.PureComponent {
  constructor (props) {
    super(props);
    const user = JSON.parse(localStorage.getItem('user'));
    this.state = {
      user: user,
      carts: [],
      showAlert: false,
      alertMessage: '',
      alertVariant: '',
    };
    autobind(this)
  }

  componentDidMount () {
    this.getCart();
  }

  getCart () {
    request("/cart/" + this.state.user.id, "GET")
        .then((res) => {
          if (res.ok) {
            res.data.map((x) => x.checked = false);
            this.setState({carts: res.data});
          } else {
            throw new Error(JSON.stringify(res.data));
          }
        }).catch((e) => {
          this.setState({showAlert: true, alertMessage: e.message, alertVariant: "danger"});
        });
  }

  setCart (i, what) {
    const v = this.state.carts.slice();
    v[i] = Object.assign(v[i], what);
    this.setState({carts: v});
  }

  deleteCart () {
    const data = {
      cartids: this.state.carts.filter((x) => x.checked).map((x) => x.id),
    };
    request("/cart/del", "POST", data)
        .then((res) => {
          if (res.ok) {
            this.getCart();
          } else {
            throw new Error(JSON.stringify(res.data));
          }
        }).catch((e) => {
          this.setState({showAlert: true, alertMessage: e.message, alertVariant: "danger"});
        });
  }

  order () {
    const data = {
      userid: this.state.user.id,
      cartids: this.state.carts.filter((x) => x.checked).map((x) => x.id),
    };
    request("/order", "POST", data)
        .then((res) => {
          if (res.ok) {
            this.setState({showAlert: true, alertMessage: "购买成功，共消费￥" + res.data.total, alertVariant: "success"});
            this.getCart();
          } else {
            throw new Error(JSON.stringify(res.data));
          }
        }).catch((e) => {
          this.setState({showAlert: true, alertMessage: e.message, alertVariant: "danger"});
        });
  }

  render () {
    const allChecked = this.state.carts.map((x) => x.checked).reduce((s, x) => s && x, true);
    const totalPrice = this.state.carts.filter((x) => x.checked).reduce((s, x) => s + x.num * x.book.price, 0).toFixed(2);
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
              {this.state.carts.map((x, i) => <ListGroup.Item key={x.id}>
                <Row>
                  <Col sm="auto">
                    <Form.Check type="radio" className="fs-5" checked={x.checked} onClick={() => {this.setCart(i, {checked: !x.checked})}}/>
                  </Col>
                  <Col sm="auto">
                    <FixedImage src={x.book.image ? x.book.image : DEFAULT_COVER} maxHeight={75} maxWidth={75}/>
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
                      <Button disabled={x.num === 1} variant="outline-secondary" onClick={() => {this.setCart(i, {num: x.num - 1})}}>-</Button>
                      <InputGroup.Text style={{backgroundColor: '#FFFFFF'}}>{x.num}</InputGroup.Text> {/* TODO: 有空改成input控件 */}
                      <Button variant="outline-secondary" onClick={() => {this.setCart(i, {num: x.num + 1})}}>+</Button>
                    </InputGroup>
                  </Col>
                </Row>
              </ListGroup.Item>)}
            </ListGroup>
            <Card.Footer>
              <Row className="justify-content-end">
                <Col md="auto" className="text-danger fs-2">￥{totalPrice}</Col>
                <Col md="auto">
                  <Button size="lg" variant="danger" onClick={this.order}>购买</Button>
                </Col>
                <Col md="auto">
                  <Button size="lg" variant="outline-danger" onClick={this.deleteCart}>删除</Button>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
          {this.state.showAlert && <Alert variant={this.state.alertVariant} onClose={() => this.setState({showAlert: false})} style={{position: 'sticky', bottom: '15px'}} dismissible>
            <p>{this.state.alertMessage}</p>
          </Alert>}
        </Col>
      </Row>
    </Container>
  }
}
