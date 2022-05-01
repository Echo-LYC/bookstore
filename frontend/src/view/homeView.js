import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import SideBar from '../components/sideBar'
import HeaderInfo from '../components/headerInfo'
import SearchBar from '../components/searchBar'
import BookCarousel from '../components/bookCarousel'
import BookCard from '../components/bookCard'
import book1 from '../assets/book/book1.jpg'
import book2 from '../assets/book/book2.jpg'
const autobind = require('class-autobind').default

export default class HomeView extends React.PureComponent {
  constructor (props) {
    super(props)
    const user = JSON.parse(localStorage.getItem('user'))
    const book_1 = {
      bookId: '12345',
      img: book1,
      title: '红楼梦',
      author: '曹雪芹',
      ISBN: '9787020002207',
      price: 59.7,
      stock: 1037,
    };
    const book_2 = {
      bookId: '11111',
      img: book2,
      title: '傲慢与偏见',
      author: '简奥斯汀',
      ISBN: '9787544711302',
      price: 18.5,
      stock: 3007,
    };
    const books = new Array(10);
    books.fill(book_1);
    books.push(book_2);
    this.state = {
      auth: user.auth,
      books: books,
      searchBooks: books,
    }
    autobind(this)
  }

  search (pattern) {
    if (pattern) {
      pattern = pattern.toLowerCase();
      this.setState({searchBooks: this.state.books.filter((x) => x.title.toLowerCase().indexOf(pattern) > -1)});
    } else {
      this.setState({searchBooks: this.state.books});
    }
  }

  render () {
    const isAdmin = this.state.auth === 'ROLE_ADMINISTRATOR';
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
            {this.state.searchBooks.map((x, i) => <Col key={i}>
              <BookCard book={x}/>
            </Col>)}
          </Row>
        </Col>
      </Row>
    </Container>
  }
}
