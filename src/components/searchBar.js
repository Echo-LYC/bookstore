import React from 'react';
import {Button, FormControl, InputGroup} from 'react-bootstrap';

export default class SearchBar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return <InputGroup className="mb-3">
                <FormControl
                    placeholder="Enter Book Name"
                    aria-label="Enter Book Name"
                    aria-describedby="search"
                />
                <Button variant="outline-secondary">
                    Search
                </Button>
            </InputGroup>;
    }
}