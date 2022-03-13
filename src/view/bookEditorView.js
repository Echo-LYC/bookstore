import React from 'react'
import {Button, Col, Container, Form, Row, InputGroup, FormControl} from 'react-bootstrap'
import PropTypes from 'prop-types';
import SideBar from '../components/sideBar'
import HeaderInfo from '../components/headerInfo'
import {history} from '../router/router';
const autobind = require('class-autobind').default

export default class BookEditorView extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      img: null,
      title: '',
      author: '',
      ISBN: '',
      price: 0,
      stock: 0,
      synopsis: '',
      isLoading: false,
    }
    autobind(this)
  }

  componentDidMount () {
    if (this.props.id) {
      // TODO: request get book detail by id
    }
  }

  onConfirm () {
    console.log(this.state)
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
          <Form>
            <InputGroup className="mb-3">
              <InputGroup.Text>标题</InputGroup.Text>
              <FormControl
                placeholder="Title"
                value={this.state.title}
                onChange={(e) => this.setState({title: e.target.value})}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>作者</InputGroup.Text>
              <FormControl
                placeholder="Author"
                value={this.state.author}
                onChange={(e) => this.setState({author: e.target.value})}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>ISBN</InputGroup.Text>
              <FormControl
                placeholder="ISBN"
                value={this.state.ISBN}
                onChange={(e) => this.setState({ISBN: e.target.value})}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>价格</InputGroup.Text>
              <FormControl
                type='number'
                placeholder="Price"
                value={this.state.price}
                onChange={(e) => this.setState({price: e.target.value})}
              />
              <InputGroup.Text>库存</InputGroup.Text>
              <FormControl
                type='number'
                placeholder="Stock"
                value={this.state.stock}
                onChange={(e) => this.setState({stock: e.target.value})}
              />
            </InputGroup>
            <InputGroup>
              <InputGroup.Text>简介</InputGroup.Text>
              <FormControl
                as="textarea"
                rows={3}
                placeholder="Synopsis"
                value={this.state.synopsis}
                onChange={(e) => this.setState({synopsis: e.target.value})}
              />
            </InputGroup>
            <br />
            <Form.Group as={Row} className="mb-3 justify-content-around">
              <Col sm={3}>
                <Button size="lg" className="w-100" variant="outline-success" onClick={() => history.back()}>取消</Button>
              </Col>
              <Col sm={3}>
                <Button size="lg" className="w-100" variant="success" disabled={this.state.isLoading}
                  onClick={!this.state.isLoading ? this.onConfirm : null}>{this.state.isLoading ? 'Loading…' : '确认'}</Button>
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
