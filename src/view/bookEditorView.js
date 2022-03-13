import React from 'react'
import {Button, Col, Container, Form, Row, InputGroup, FormControl, Figure} from 'react-bootstrap'
import PropTypes from 'prop-types';
import SideBar from '../components/sideBar'
import HeaderInfo from '../components/headerInfo'
import {history} from '../router/router';
const autobind = require('class-autobind').default

export default class BookEditorView extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      img: null, // TODO: img picker
      title: '',
      author: '',
      ISBN: '',
      price: 0,
      stock: 0,
      synopsis: '',
      validated: false,
      isLoading: false,
    }
    autobind(this)
  }

  componentDidMount () {
    if (this.props.id) {
      // TODO: request get book detail by id
    }
  }

  handleSubmit (e) {
    this.setState({validated: true});
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    // this.setState({isLoading: true});
    // TODO: post request and set callback
    // if success go back and refresh
    // else set isLoading false and toast an alert
  }

  render () {
    return <Container>
      <HeaderInfo/>
      <hr className="bordered-dashed"/>
      <Row>
        <Col sm={3}>
          <SideBar defaultActiveKey="/home"/>
        </Col>
        <Col sm={{ span: 5, offset: 2 }}>
          <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
            <InputGroup hasValidation className="mb-3">
              <InputGroup.Text>标题</InputGroup.Text>
              <FormControl
                placeholder="Title"
                value={this.state.title}
                onChange={(e) => this.setState({title: e.target.value})}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please input a title.
              </Form.Control.Feedback>
            </InputGroup>
            <InputGroup hasValidation className="mb-3">
              <InputGroup.Text>作者</InputGroup.Text>
              <FormControl
                placeholder="Author"
                value={this.state.author}
                onChange={(e) => this.setState({author: e.target.value})}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please input an author.
              </Form.Control.Feedback>
            </InputGroup>
            <InputGroup hasValidation className="mb-3">
              <InputGroup.Text>ISBN</InputGroup.Text>
              <FormControl
                placeholder="ISBN"
                value={this.state.ISBN}
                onChange={(e) => this.setState({ISBN: e.target.value})}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please input ISBN.
              </Form.Control.Feedback>
            </InputGroup>
            <Row>
              <Col>
                <InputGroup hasValidation className="mb-3">
                  <InputGroup.Text>价格</InputGroup.Text>
                  <FormControl
                    type='number'
                    placeholder="Price"
                    value={this.state.price}
                    onChange={(e) => this.setState({price: isNaN(parseFloat(e.target.value)) ? '' : parseFloat(e.target.value)})}
                    isInvalid={this.state.price === '' || this.state.price < 0}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please input a non-negative number.
                  </Form.Control.Feedback>
                </InputGroup>
              </Col>
              <Col>
                <InputGroup hasValidation className="mb-3">
                  <InputGroup.Text>库存</InputGroup.Text>
                  <FormControl
                    type='number'
                    placeholder="Stock"
                    value={this.state.stock}
                    onChange={(e) => this.setState({stock: isNaN(parseInt(e.target.value)) ? '' : parseInt(e.target.value)})}
                    isInvalid={this.state.stock === '' || this.state.stock < 0}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please input a non-negative integer.
                  </Form.Control.Feedback>
                </InputGroup>
              </Col>
            </Row>
            <InputGroup hasValidation>
              <InputGroup.Text>简介</InputGroup.Text>
              <FormControl
                as="textarea"
                rows={3}
                placeholder="Synopsis"
                value={this.state.synopsis}
                onChange={(e) => this.setState({synopsis: e.target.value})}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please input a synopsis.
              </Form.Control.Feedback>
            </InputGroup>
            <br />
            <Form.Group as={Row} className="mb-3 justify-content-around">
              <Col sm={3}>
                <Button size="lg" className="w-100" variant="outline-success" onClick={() => history.back()}>取消</Button>
              </Col>
              <Col sm={3}>
                <Button size="lg" className="w-100" variant="success" type="submit" disabled={this.state.isLoading}>{this.state.isLoading ? 'Loading…' : '提交'}</Button>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  }
}
BookEditorView.propTypes = {
  id: PropTypes.string
}