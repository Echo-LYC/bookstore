import React from 'react'
import {Alert, Button, Card, Col, Container, Row} from 'react-bootstrap'
import SideBar from '../components/sideBar'
import HeaderInfo from '../components/headerInfo'
import {DEFAULT_COVER} from './bookEditorView';
import {request} from "../util/Ajax";
import FixedImage from "../components/fixedImage";
const autobind = require('class-autobind').default;

export default class BookView extends React.PureComponent {
  constructor (props) {
    super(props);
    const user = JSON.parse(localStorage.getItem('user'));
    this.state = {
      user: user,
      image: DEFAULT_COVER,
      title: '',
      author: '',
      isbn: '',
      language: '',
      publication: '',
      year: '',
      price: 0,
      stock: 0,
      synopsis: '',
      showAlert: false,
      alertMessage: '',
      alertVariant: '',
    };
    autobind(this)
  }

  componentDidMount () {
    request("/book/" + this.props.match.params.id, "GET")
        .then((res) => {
          if (res.ok) {
            this.setState(res.data);
          } else {
            throw new Error(JSON.stringify(res.data));
          }
        }).catch((e) => {
      this.setState({showAlert: true, alertMessage: e.message, alertVariant: "danger"});
    });
  }

  deleteBook () {
    request("/book/" + this.props.match.params.id, "DELETE")
        .then((res) => {
          if (res.ok) {
            window.location.replace(document.referrer);
          } else {
            throw new Error(JSON.stringify(res.data));
          }
        }).catch((e) => {
          this.setState({showAlert: true, alertMessage: e.message, alertVariant: "danger"});
        });
  }

  addCart () {
    const data = {
      "userid": this.state.user.id,
      "bookid": this.props.match.params.id,
      "num": 1,
    };
    // TODO: different num
    request("/cart/add", "POST", data)
        .then((res) => {
          if (res.ok) {
            this.setState({showAlert: true, alertMessage: "成功加入购物车", alertVariant: "success"});
          } else {
            throw new Error(JSON.stringify(res.data));
          }
        }).catch((e) => {
      this.setState({showAlert: true, alertMessage: e.message, alertVariant: "danger"});
    });
  }

  render () {
    const isAdmin = this.state.user.auth === 'ADMINISTRATOR';
    const image = (this.state.image) ? this.state.image : DEFAULT_COVER;
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
              <FixedImage src={image} maxHeight={300} maxWidth={300}/>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title className="fs-2">{this.state.title}</Card.Title>
                  <hr className="bordered-dashed"/>
                  <Card.Title>作者：<span className="text-muted">{this.state.author}</span></Card.Title>
                  {this.state.language && <Card.Title>语言：<span className="text-muted">{this.state.language}</span></Card.Title>}
                  <Card.Title>ISBN：<span className="text-muted">{this.state.isbn}</span></Card.Title>
                  {this.state.publication && <Card.Title>{this.state.publication} {this.state.year && <span className="text-muted fs-6">{this.state.year}出版</span>}</Card.Title>}
                  <Card.Title>状态：{this.state.stock ? '有货' : '无货'} <span className="text-muted fs-6">库存{this.state.stock}件</span></Card.Title>
                  <Card.Title>定价：<span className="text-danger fs-3">￥{this.state.price}</span></Card.Title>
                  {this.state.synopsis && <hr className="bordered-dashed"/>}
                  {this.state.synopsis && <Card.Text>
                    <span className="fs-5">作品简介：</span>
                    {this.state.synopsis}
                  </Card.Text>}
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br/>
          {!isAdmin && <Row className="justify-content-around">
            <Col sm={3}>
              <Button size="lg" className="w-100" variant="danger" onClick={this.addCart}>加入购物车</Button>
            </Col>
            <Col sm={3}>
              <Button size="lg" className="w-100" variant="outline-danger">立即购买</Button>
            </Col>
          </Row>}
          {isAdmin && <Row className="justify-content-around">
            <Col sm={3}>
              <Button size="lg" className="w-100" variant="outline-success" href={'/editor/' + this.props.match.params.id}>编辑图书详情</Button>
            </Col>
            <Col sm={3}>
              <Button size="lg" className="w-100" variant="danger" onClick={this.deleteBook}>删除图书</Button>
            </Col>
          </Row>}
          {this.state.showAlert && <Alert variant={this.state.alertVariant} onClose={() => this.setState({showAlert: false})} style={{position: 'sticky', bottom: '15px'}} dismissible>
            <p>{this.state.alertMessage}</p>
          </Alert>}
        </Col>
      </Row>
    </Container>
  }
}
