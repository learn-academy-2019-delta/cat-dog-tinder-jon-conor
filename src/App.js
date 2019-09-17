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

class App extends React.Component{
    constructor(props){
    super(props)
    this.state = {
      cats: [
        {
          id: 1,
          name: 'Morris',
          age: 2,
          enjoys: "Long walks on the beach."
        },
        {
          id: 2,
          name: 'Paws',
          age: 4,
          enjoys: "Snuggling by the fire."
        },
        {
          id: 3,
          name: 'Mr. Meowsalot',
          age: 12,
          enjoys: "Being in charge."
      },
      {
          id: 4,
          name: 'Rusty',
          age: 22,
          enjoys: "Laying around."
      },
      {
          id: 5,
          name: 'Garfield',
          age: 7,
          enjoys: "Eating Lasagna."
      },
      {
          id: 6,
          name: 'Raisins',
          age: 11,
          enjoys: "Belly rubs."
      },
      {
          id: 7,
          name: 'Snickers',
          age: 5,
          enjoys: "Bringing my owner dead animals."
      },
      {
          id: 8,
          name: 'Tinkerbell',
          age: 21,
          enjoys: "Drinking warm milk."
      },
      {
          id: 9,
          name: 'Kitty',
          age: 13,
          enjoys: "Playing with ball of yarn."
      },
      {
          id: 10,
          name: 'Roger',
          age: 9,
          enjoys: "Laying by the pool."
      }
      ]
    }
  }

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

                <Route exact path="/cats" render={( props) => <Cats cats={this.state.cats}/> } />
                <Route exact path='/NewCat' component = {NewCat} />
                <Route exact path='/HOme' component = {Home} />

            </Router>
            </div>
        )
    }

}

export default App;
