import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';
import SideBar from '../components/sideBar'
import HeaderInfo from '../components/headerInfo'
import ReactTable from '../components/reactTable';
const autobind = require('class-autobind').default

export default class OrderView extends React.PureComponent {
  constructor (props) {
    super(props)
    const order1 = {
      title: '红楼梦',
      username: 'Echo',
      time: '2022-03-06 12:00:00',
      number: 1,
      price: 59.7
    };
    const order2 = {
      title: '傲慢与偏见',
      username: 'Lucy',
      time: '2022-03-18 12:00:00',
      number: 2,
      price: 18.8
    };
    const order3 = {
      title: '飘',
      username: 'Echo',
      time: '2022-03-23 12:00:00',
      number: 1,
      price: 27.9
    };
    const orders = new Array(30);
    orders.fill(order1, 0, 10);
    orders.fill(order2, 10, 20);
    orders.fill(order3, 20);
    this.state = {
      orders: orders,
      columns: [
        {
          Header: '书名',
          accessor: 'title',
          id: 'title',
        },
        {
          Header: '用户名',
          accessor: 'username',
          id: 'username',
        },
        {
          Header: '下单时间',
          accessor: 'time',
          id: 'time',
        },
        {
          Header: '数量',
          accessor: 'number',
          id: 'number',
        },
        {
          Header: '价格',
          accessor: 'price',
          id: 'price',
        },
      ],
    }
    autobind(this)
  }

  componentDidMount () {
    // TODO: request get orders by id
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
          <ReactTable columns={this.state.columns} data={this.state.orders} initialState={{pageSize: 15, sortBy: [{id: 'time', desc: true}]}}/>
          {/* TODO: filter*/}
          {/* defaultFilterMethod={(filter, row) => String(row[filter.id]) === filter.value} */}
        </Col>
      </Row>
    </Container>
  }
}
OrderView.propTypes = {
  id: PropTypes.string.isRequired
}
