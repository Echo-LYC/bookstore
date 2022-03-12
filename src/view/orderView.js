import React from 'react'
import { Col, Table, Container, Row } from 'react-bootstrap'
import SideBar from '../components/sideBar'
import HeaderInfo from '../components/headerInfo'

export default class OrderView extends React.PureComponent {
  constructor (props) {
    super(props)
    const orders = new Array(10)
    orders.fill({
      name: '红楼梦',
      time: '2022-03-06 12:00:00',
      number: 1,
      price: 59.7
    })
    this.state = {
      orders: orders
    }
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
          {/* <ReactTable className="-striped -highlight" */}
          {/*            defaultPageSize={10} showPageSizeOptions={false} */}
          {/*            filterable */}
          {/*            defaultFilterMethod={(filter, row) => String(row[filter.id]) === filter.value} */}
          {/*            columns={[ */}
          {/*                {Header: "书名", id: "name", accessor: "name", sortable: false, Cell: props => <span>{props.value}</span>, minWidth: 400}, */}
          {/*                {Header: "下单时间", id: "time", accessor: "time", sortable: true, Cell: props => <span>{props.value}</span>}, */}
          {/*                {Header: "数量", id: "number", accessor: "number", sortable: true, Cell: props => <span>{props.value}</span>}, */}
          {/*                {Header: "价格", id: "price", accessor: "price", sortable: true, Cell: props => <span>{props.value}</span>}, */}
          {/*            ]} */}
          {/*            data={this.state.orders} */}
          {/*            defaultSorted={[{id: "time", desc: true}]} */}
          {/*            previousText='Previous Page' nextText='Next Page' pageText="" ofText="/"/> */}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>书名</th>
                <th>下单时间</th>
                <th>数量</th>
                <th>价格</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>红楼梦</td>
                <td>2022-03-06 12:00:00</td>
                <td>1</td>
                <td>59.7</td>
              </tr>
              <tr>
                <td>傲慢与偏见</td>
                <td>2022-03-06 12:00:00</td>
                <td>1</td>
                <td>44.9</td>
              </tr>
              <tr>
                <td>飘</td>
                <td>2022-03-06 12:00:00</td>
                <td>1</td>
                <td>66.8</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  }
}
