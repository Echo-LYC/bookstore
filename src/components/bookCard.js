import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import PropTypes from 'prop-types';

export default class BookCard extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const book = this.props.book;
    return <Card>
      <a id="book" href={'/book?id=' + book.bookId} style={{ textDecoration: 'none' }}>
        <Card.Img className="w-100" height={200} variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>
            <Row className="justify-content-between">
              <Col md="auto" className="mb-2 text-black fs-5">
                {book.title}
              </Col>
              <Col md="auto" className="mb-2 text-muted fs-6">
                {book.author}
              </Col>
            </Row>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted fs-6">ISBN: {book.ISBN}</Card.Subtitle>
          <Card.Subtitle className="text-danger">
            <Row className="justify-content-between">
              <Col md="auto">
                ￥{book.price}
              </Col>
              <Col md="auto">
                库存：{book.stock}
              </Col>
            </Row>
          </Card.Subtitle>
        </Card.Body>
      </a>
    </Card>
  }
}
BookCard.propTypes = {
  book: PropTypes.object.isRequired
}
