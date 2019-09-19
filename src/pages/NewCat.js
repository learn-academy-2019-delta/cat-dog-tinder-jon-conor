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

class NewCat extends Component {
    constructor(props){
    super(props)
        this.state = {
            form: {
                name: '',
                age: '',
                enjoys: '',
                img: ''
            }
        }
    }

    handleChange = (event) => {
        let {form} = this.state
        form[event.target.name] = event.target.value
        this.setState({form: form})
    }

    handleSubmit = (el) => {
        el.preventDefault()
        this.props.handleNewCat(this.state.form)
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
                                <Form.Group>
                                    <Form.Label>ImageURL: </Form.Label>
                                    <Form.Control type='string' placeholder="Image URL" name='img'
                                    onChange={this.handleChange} value={this.state.form.img}/>
                                </Form.Group>

                            </Form>
                            <center><br/>
                            <Button variant='dark' onClick={this.handleSubmit} type="submit">Create Profile</Button>
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

export default NewCat
