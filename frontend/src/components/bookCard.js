import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import PropTypes from 'prop-types';
import {DEFAULT_COVER} from "../view/bookEditorView";

export default class BookCard extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state = {}
  }

  render () {
    const book = this.props.book;
    const image = (book.image) ? book.image : DEFAULT_COVER;
    return <Card>
      <a href={'/book/' + book.id} style={{ textDecoration: 'none' }}>
        <Card.Img className="w-100" height={200} variant="top" src={image} />
        <Card.Body>
          <Card.Title className="mb-2 text-black fs-5">{book.title}</Card.Title>
          <Card.Title className="mb-2 text-muted fs-6">{book.author}</Card.Title>
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
};
