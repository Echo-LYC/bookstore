import React from 'react'
import {Container, Row, Col, Placeholder} from 'react-bootstrap';
import SideBar from '../components/sideBar'
import HeaderInfo from '../components/headerInfo'
import OrderCard from "../components/orderCard";
import {request} from "../util/Ajax";
const autobind = require('class-autobind').default;

export default class OrderView extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      orders: [],
    };
    autobind(this)
  }

  componentDidMount () {
    const user = JSON.parse(localStorage.getItem('user'));
    request("/order/" + user.id, "GET")
        .then((res) => {
          if (res.ok) {
            res.data.map((x) => x.time = new Date(x.time));
            res.data.sort((a, b) => b.time - a.time);
            this.setState({orders: res.data});
          } else {
            throw new Error(JSON.stringify(res.data));
          }
        }).catch((e) => {
          console.log(e.message);
        });
  }

  render () {
    return <Container>
      <HeaderInfo/>
      <hr className="bordered-dashed"/>
      <Row>
        <Col sm={3}>
          <SideBar defaultActiveKey="/orders"/>
        </Col>
        <Col sm={9}>
          {this.state.orders.map((x) => <Col key={x.id}>
            <OrderCard order={x}/>
            <Placeholder xs={12} bg="light" />
          </Col>)}
        </Col>
      </Row>
    </Container>
  }
}
