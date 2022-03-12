import React from 'react'
import { Carousel } from 'react-bootstrap'
import carousel1 from '../assets/carousel/carousel_1.jpg'
import carousel2 from '../assets/carousel/carousel_2.jpg'
import carousel3 from '../assets/carousel/carousel_3.jpg'

export default class BookCarousel extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Call Me By Your Name</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Pride & Prejudice</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Gone with the Wind</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
  }
}
