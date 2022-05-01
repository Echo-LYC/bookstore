import React from 'react'
import {Button, Form, FormControl, InputGroup} from 'react-bootstrap'
import PropTypes from 'prop-types';
const autobind = require('class-autobind').default

export default class SearchBar extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      search: '',
    }
    autobind(this)
  }

  handleSearch (e) {
    this.props.onSearch(this.state.search);
    e.preventDefault();
    e.stopPropagation();
  }

  render () {
    return <Form onSubmit={this.handleSearch}>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Enter Book Name"
          value={this.state.search}
          onChange={(e) => this.setState({search: e.target.value})}
        />
        <Button type="submit" variant="outline-secondary" >
          Search
        </Button>
      </InputGroup>
    </Form>
  }
}
SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired
}
