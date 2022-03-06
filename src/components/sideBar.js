import React from 'react';
import {Nav} from 'react-bootstrap';

export default class SideBar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return <Nav variant="pills" defaultActiveKey={this.props.defaultActiveKey} className="flex-column">
                <Nav.Item>
                    <Nav.Link href="/home">Books</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/cart">My Cart</Nav.Link>
                </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/orders">My Orders</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/login">My Profile</Nav.Link>
            </Nav.Item>
            </Nav>;
    }
}