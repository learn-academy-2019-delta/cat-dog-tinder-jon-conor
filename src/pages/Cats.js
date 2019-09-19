import React, { Component } from 'react'
import {
    Row,
    Col,
    ListGroup,
    Jumbotron,
    Container,
    CardGroup,
    Card,
    Button
} from 'react-bootstrap'

class Cats extends Component {

    handleClick = (id) => {
        this.props.handleDeleteCat(id)
    }

    render(){
        return(
            <div>
            <Container>
                <Jumbotron>
                <center>
                <h4>CATS</h4>
                </center>
                    <Container>
                        <CardGroup>
                        {this.props.cats.map((cat, index) =>{
                          return (
                            <center>
                            <Col>
                              <Row>
                                <Card key={index} border="primary" style={{ width: '18rem', height: '24rem' }}>
                                    <Card.Body>
                                        <Card.Img variant="top" src= {cat.img} height ='150px'/>
                                        <Card.Title>{cat.name}</Card.Title>
                                        <Card.Text>{cat.age} years old</Card.Text>
                                        <Card.Text>Enjoys: {cat.enjoys}</Card.Text>

                                            <Button variant = 'primary' type= 'submit'>Update</Button>
                                            <Button variant = 'danger' type= 'submit' onClick = {() => this.handleClick(cat.id)}>Delete</Button>

                                    </Card.Body>
                                  </Card>
                              </Row>
                             </Col>
                             </center>
                            )
                        })}
                        </CardGroup>
                      </Container>
                </Jumbotron>
            </Container>
            </div>
        )
    }
}
export default Cats
