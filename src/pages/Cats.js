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
        var styles = {
            display: 'flex',
            justifyContent: 'center'
        }
        return(
            <div>
            <Container>
                <Jumbotron>
                <center>
                <h4>Available Cats</h4>
                <br/>
                </center>
                    <Container>
                        <CardGroup style={styles}>
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
                                        <button type="button" class="btn btn-outline-danger" onClick = {() => this.handleClick(cat.id)}>Delete</button>
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
            <Jumbotron>
                <center>
                    <footer>© Jon Simpson || Conor Preston</footer>
                </center>
            </Jumbotron>
            </div>
        )
    }
}
export default Cats
