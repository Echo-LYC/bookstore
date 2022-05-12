import React from 'react'
import {Image} from 'react-bootstrap'
import PropTypes from 'prop-types';

export default class FixedImage extends React.PureComponent {
    constructor (props) {
        super(props);
        this.state = {}
    }

    render () {
        return <div style={{width: this.props.maxWidth, height: this.props.maxHeight, display: 'table-cell', verticalAlign: 'middle', textAlign: 'center'}}>
            <Image style={{maxHeight: this.props.maxHeight, maxWidth: this.props.maxWidth}} src={this.props.src}/>
        </div>;
    }
}
FixedImage.propTypes = {
    src: PropTypes.any.isRequired,
    maxHeight: PropTypes.number.isRequired,
    maxWidth: PropTypes.number.isRequired,
};
