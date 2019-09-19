import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Jumbotron from 'react-bootstrap/Jumbotron'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from 'react-router-dom'
import Cats from './pages/Cats'
import NewCat from './pages/NewCat'
import Home from './pages/Home'

import { getCats } from './api'
import { createCat } from './api'
import { destroyCat } from './api'
import { updateCat } from './api'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          cats: [],
          success: false,
          img: ''
        }
    }

    componentDidMount() {
        getCats()
            .then(APIcats => {
                this.setState({
                    cats: APIcats
                })
            })
    }

    handleNewCat = (cat) => {
        console.log('It got here')
    	createCat(cat)
        .then(successCat => {
            console.log("SUCCESS! New cat: ", successCat);
            if (typeof successCat.name === 'string') {
                let successStatus = this.state.success
                successStatus = true
                this.setState({ success: successStatus })
                console.log(this.state.success)
                window.location.reload()
            }
        })
    }

    handleDeleteCat = (cat) => {
        destroyCat(cat)
        .then(deleteCat => {
            this.setState({ cats: deleteCat })
            window.location.reload()
        })
    }

    // handleUpdateCat = (cat) => {
    //     updateCat(cat)
    //     .then(updateCat => {
    //         this.setState({ cats: updateCat })
    //     })
    // }

    render(){
        return(
            <div>
            <Router>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/home">Cat Tinder</Navbar.Brand>
                    <Nav className="mr-auto">
                      <Nav.Link href="/home">Home</Nav.Link>
                      <Nav.Link href="/newcat">Create Profile</Nav.Link>
                      <Nav.Link href="/cats">View Cats</Nav.Link>


                    </Nav>
                </Navbar>

                <Route exact path="/cats" render={( props) => <Cats cats={this.state.cats} handleDeleteCat = {this.handleDeleteCat}/> } />

                <Route exact path='/NewCat' render={(props) => <NewCat {...props} success = {this.state.success} handleNewCat = {this.handleNewCat}  /> } />

                <Route exact path='/Home' component = {Home} />

            </Router>
            </div>
        )
    }

}

export default App;
