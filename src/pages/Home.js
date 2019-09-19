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
        var styles = {
            display: 'flex',
            justifyContent: 'center'
        }
        return(
            <div>
            <Container>
                <Jumbotron>
                    <Container>
                        <Carousel style = {styles}>

                        {this.props.cats.slice(12,15).map((cat, index) => {
                            return(
                                <Carousel.Item>
                                    <center><img height = '400px' src = {cat.img}/></center>
                                        <Carousel.Caption>
                                            <h3>Meet {cat.name}</h3>
                                            <p>Enjoys: {cat.enjoys}</p>
                                        </Carousel.Caption>
                                </Carousel.Item>
                            )})
                        }




                        </Carousel>
                        <center>
                            <br/>
                            <br/>
                            <h4>Find the Right Cat for You with Cat Tinder!</h4>
                        </center>
                    </Container>
                </Jumbotron>
            </Container>
            <Jumbotron>
                <center>
                    <footer>© Jon Simpson || Conor Preston</footer>
                </center>
            </Jumbotron>
            </div>
        )
    }
}

export default Home;

// <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_960_720.jpg"
//       alt="First slide"
//       height='400px'
//     />
//     <Carousel.Caption>
//         <h3>Meet Tinkerbell</h3>
//         <p>She enjoys drinking warm milk.</p>
//     </Carousel.Caption>
// </Carousel.Item>
// <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="https://live.staticflickr.com/2228/2187242989_2eacb23b1e_b.jpg"
//       alt="Second slide"
//       height='400px'
//     />
//
//     <Carousel.Caption>
//       <h3>Meet Roger</h3>
//       <p>He enjoys laying by the pool.</p>
//     </Carousel.Caption>
// </Carousel.Item>
// <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="https://live.staticflickr.com/5524/9588955623_b56bfd5615_b.jpg"
//       alt="Third slide"
//       height='400px'
//     />
//
//     <Carousel.Caption>
//       <h3>Meet Paws</h3>
//       <p>She likes snuggling up by a fire.</p>
//     </Carousel.Caption>
// </Carousel.Item>
