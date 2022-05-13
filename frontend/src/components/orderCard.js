import React from "react";
import {Card, Col, Image, ListGroup, Row} from "react-bootstrap";
import FixedImage from "./fixedImage";
import {DEFAULT_COVER} from "../view/bookEditorView";
import PropTypes from "prop-types";
import {formatTime} from "../util/formatTime";

export default class OrderCard extends React.PureComponent {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        const order = this.props.order;
        const user = order.user;
        return <Card>
            <Card.Header>
                <Row className="justify-content-between">
                    <Col md="auto" className="fs-5">
                        {user.image && <Image roundedCircle={40} width={40} height={40} src={user.image}/>}{' '}
                        {user.username}
                    </Col>
                    <Col md="auto" className="text-muted">
                        下单时间：{formatTime(order.time)}
                    </Col>
                </Row>
            </Card.Header>
            <ListGroup variant="flush">
                {order.orderItems.map((x) => <ListGroup.Item key={x.id}>
                    <Row>
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
                                    ￥{x.price}
                                </Col>
                            </Row>
                        </Col>
                        <Col sm="auto" className="fs-4">
                            ×{x.num}
                        </Col>
                    </Row>
                </ListGroup.Item>)}
            </ListGroup>
            <Card.Footer>
                <Row className="justify-content-end">
                    <Col md="auto" className="fs-4">实付<span className="text-danger fs-2">￥{order.total}</span></Col>
                </Row>
            </Card.Footer>
        </Card>
    }
}
OrderCard.propTypes = {
    order: PropTypes.object.isRequired
};
