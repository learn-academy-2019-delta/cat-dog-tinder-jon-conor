import React, { Component } from 'react'
import {
    Jumbotron,
    Form,
    Button,
    Col,
    Row,
    Container
} from 'react-bootstrap'

class NewCat extends Component {
    constructor(props){
    super(props)
        this.state = {
            form: {
                id: '',
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
                                <h4>Create Profile</h4>
                            </center><br/>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Enter ID:  </Form.Label>
                                    <Form.Control type='integer' placeholder="ID #" name='id' onChange={this.handleChange} value={this.state.form.id}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Enter Name: </Form.Label>
                                    <Form.Control type='text' placeholder="Name" name='name'
                                    onChange={this.handleChange} value={this.state.form.name}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Enter Age: </Form.Label>
                                    <Form.Control type='integer' placeholder="Age" name='age'
                                    onChange={this.handleChange} value={this.state.form.age}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>What does he/she enjoy: </Form.Label>
                                    <Form.Control type='text' as="textarea" rows="5" placeholder="Hobbies, extracurricular activities, etc." name='enjoys' onChange={this.handleChange} value={this.state.form.enjoys}/>
                                </Form.Group>
                            </Form>
                            <center><br/>
                                <Button variant='dark'>Create Profile</Button>
                            </center>
                        </Container>
                    </Jumbotron>
                    </Container>
            </div>
        )
    }
}

export default NewCat
