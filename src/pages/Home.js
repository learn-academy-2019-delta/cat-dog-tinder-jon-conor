import React, { Component } from 'react'
import {
    Row,
    Col,
    ListGroup,
    Jumbotron,
    Container,
    Carousel
} from 'react-bootstrap'

class Home extends Component {

    render(){
        return(
            <div>
            <Jumbotron>
            <Carousel>
                <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_960_720.jpg"
                      alt="First slide"
                      height='400px'
                    />
                    <Carousel.Caption>
                        <h3>Meet Tinkerbell</h3>
                        <p>He enjoys drinking warm milk.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://live.staticflickr.com/2228/2187242989_2eacb23b1e_b.jpg"
                      alt="Third slide"
                      height='400px'
                    />

                    <Carousel.Caption>
                      <h3>Meet Roger</h3>
                      <p>He enjoys laying by the pool.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://live.staticflickr.com/5524/9588955623_b56bfd5615_b.jpg"
                      alt="Third slide"
                      height='400px'
                    />

                    <Carousel.Caption>
                      <h3>Meet Paws</h3>
                      <p>She likes snuggling up by a fire.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </Jumbotron>
            </div>
        )
    }
}

export default Home;
