import React from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import book1 from '../assets/book/book1.jpg';

export default class BookCard extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return <Card style={{ width: '12rem' }}>
            <a id="book" href={"/book"} style={{textDecoration: 'none'}}>
                <Card.Img height={200} variant="top" src={book1} />
                <Card.Body>
                    <Card.Title>
                        <Row className="justify-content-around">
                            <Col md="auto" className="mb-2 text-black fs-5">
                                红楼梦
                            </Col>
                            <Col md="auto" className="mb-2 text-muted fs-6">
                                曹雪芹
                            </Col>
                        </Row>
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted fs-6">ISBN: 97870200022</Card.Subtitle>
                    <Card.Subtitle className="text-danger">
                        <Row className="justify-content-around">
                            <Col md="auto">
                                ￥59.7
                            </Col>
                            <Col md="auto">
                                库存：1037
                            </Col>
                        </Row>
                    </Card.Subtitle>
                </Card.Body>
            </a>
        </Card>;
    }
}