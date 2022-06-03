import React from 'react'
import { Nav } from 'react-bootstrap'
import PropTypes from 'prop-types'

export default class SideBar extends React.PureComponent {
  constructor (props) {
    super(props);
    const user = JSON.parse(localStorage.getItem('user'));
    this.state = {
      auth: user.auth
    }
  }

  render () {
    const isAdmin = this.state.auth === 'ADMINISTRATOR';
    return <Nav variant="pills" defaultActiveKey={this.props.defaultActiveKey} className="flex-column">
      <Nav.Item>
        <Nav.Link href="/home"><i className="fa fa-book"/> Books</Nav.Link>
      </Nav.Item>
      {!isAdmin && <Nav.Item>
        <Nav.Link href="/cart"><i className="fa fa-cart-plus"/> My Cart</Nav.Link>
      </Nav.Item>}
      {isAdmin && <Nav.Item>
        <Nav.Link href="/users"><i className="fa fa-users"/> Users</Nav.Link>
      </Nav.Item>}
      {!isAdmin && <Nav.Item>
        <Nav.Link href="/orders"><i className="fa fa-table"/> My Orders</Nav.Link>
      </Nav.Item>}
      {isAdmin && <Nav.Item>
        <Nav.Link href="/orders"><i className="fa fa-table"/> Orders</Nav.Link>
      </Nav.Item>}
      <Nav.Item>
        <Nav.Link href="/statistics"><i className="fa fa-bar-chart"/> Statistics</Nav.Link>
      </Nav.Item>
    </Nav>
  }
}
SideBar.propTypes = {
  defaultActiveKey: PropTypes.string.isRequired
};
