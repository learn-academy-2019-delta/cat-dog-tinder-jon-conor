import React, { Component } from 'react'
import {
    Jumbotron,
    Form,
    Button,
    Col,
    Row,
    Container,
} from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

class EditCat extends Component {
    constructor(props){
    super(props)
        this.state = {
            form: {
                name: '',
                age: '',
                enjoys: ''
            }
        }
    }

    handleChange = (event) => {
        let {form} = this.state
        form[event.target.name] = event.target.value
        this.setState({form: form})
    }


    render(){
        return(
            <div>
                <Container>
                <Jumbotron>
                        <Container>
                            <center>
                                <h4>Delete Profile</h4>
                            </center><br/>
                            <Form>
                                <Form.Group controlId="exampleForm.ControlSelect2">
                                    <Form.Label>Select Cat:</Form.Label>
                                    <Form.Control as="select" >
                                    {this.props.cats.map((cat, index) => {
                                        return(
                                            <option>{cat.name}</option>
                                        )
                                    })}
                                    </Form.Control>
                                  </Form.Group>
                            </Form>
                            <center><br/>
                            <Button variant='dark' onClick={this.handleSubmit} type="submit">Delete</Button>
                                    {this.props.success &&
                                        <Redirect to = '/cats' />
                                    }
                            </center>
                        </Container>
                    </Jumbotron>
                    </Container>
            </div>
        )
    }
}

export default EditCat
