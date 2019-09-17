import React, { Component } from 'react'
import {
    Row,
    Col,
    ListGroup,
    Jumbotron,
    Container
} from 'react-bootstrap'

class Cats extends Component {

    render(){
        return(
            <div>
            <Container>
                <Jumbotron>
                <center>
                <h4>CATS</h4>
                </center>
                    <Row>
                      <Col xs={12}>
                        <ListGroup>
                        {this.props.cats.map((cat, index) =>{
                          return (
                            <ListGroup.Item key={index}>
                              <h5>
                                <span className='cat-name'>{cat.name}</span> - <small className='cat-age'>{cat.age} years old</small>
                              </h5>
                                <span className='cat-enjoys'>Enjoys: {cat.enjoys}</span>
                              </ListGroup.Item>
                            )
                          })}
                        </ListGroup>
                      </Col>
                    </Row>
                </Jumbotron>
            </Container>
            </div>
        )
    }
}
export default Cats
