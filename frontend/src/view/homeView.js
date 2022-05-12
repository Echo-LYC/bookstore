import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import SideBar from '../components/sideBar'
import HeaderInfo from '../components/headerInfo'
import SearchBar from '../components/searchBar'
import BookCarousel from '../components/bookCarousel'
import BookCard from '../components/bookCard'
import {request} from "../util/Ajax";
const autobind = require('class-autobind').default;

export default class HomeView extends React.PureComponent {
  constructor (props) {
    super(props);
    const user = JSON.parse(localStorage.getItem('user'));
    this.state = {
      auth: user.auth,
      books: [],
    };
    autobind(this)
  }

  componentDidMount () {
    request("/books", "GET")
        .then((res) => {
          if (res.ok) {
            res.data.map((book) => book.show = true);
            this.setState({books: res.data});
          } else {
            throw new Error(JSON.stringify(res.data));
          }
        }).catch((e) => {
          console.log(e.message);
        });
  }

  search (pattern) {
    const books = this.state.books.slice();
    if (pattern) {
      pattern = pattern.toLowerCase();
      books.map((book) => book.show = book.title.toLowerCase().indexOf(pattern) > -1);
    } else {
      books.map((book) => book.show = true);
    }
    this.setState({books: books});
  }

  render () {
    const isAdmin = this.state.auth === 'ADMINISTRATOR';
    const books = this.state.books.filter((book) => book.show);
    return <Container>
      <HeaderInfo/>
      <hr className="bordered-dashed"/>
      <Row>
        <Col sm={3}>
          <SideBar defaultActiveKey="/home"/>
        </Col>
        <Col sm={9}>
          <SearchBar onSearch={this.search}/>
          <Col sm={{ span: 10, offset: 1 }}>
            <BookCarousel/>
          </Col>
          <br/>
          <Row xs={1} md={4} className="g-4">
            {isAdmin && <Col>
              <Button bsSize="lg" bsStyle="success" className="w-100 fs-4" href='/editor'>
                <i className="fa fa-plus fa-lg"/> 添加图书
              </Button>
            </Col>}
            {books.map((book) => <Col key={book.id}>
              <BookCard book={book}/>
            </Col>)}
          </Row>
        </Col>
      </Row>
    </Container>
  }
}
