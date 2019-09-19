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
        this.props.handleUpdateCat(this.state.form)
    }


    handleClick = (id) => {
        this.props.handleDeleteCat(id)
    }

    render(){
        return(
            <div>
                <Container>
                    <Jumbotron>
                        <Container>
                            <center>
                            <h4>Edit Profile</h4>
                            </center><br/>
                            <Form>
                                <Form.Group controlId="exampleForm.ControlSelect2">
                                    <Form.Label>Select Cat:</Form.Label>
                                    <Form.Control as="select" >
                                        {this.props.cats.map((cat, index) => {
                                        return(
                                            <option>{cat.name}</option>)})}
                                    </Form.Control>
                                </Form.Group>
                            </Form>
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

export default EditCat
