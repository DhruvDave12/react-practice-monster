import React from 'react';

import { CardList } from './components/card-list/card-list.component';

import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      // initial state is an empty array we are gonna fetch through api and solve it.
      monsters: []
    }
  }

  // If we want to get data from any backend api what we do is that we use componentDidMount() and fetch
  componentDidMount(){
    // this fetch returns a promise
    fetch('https://jsonplaceholder.typicode.com/users')
    // this promise will give a response to us which we convert to json using .json and then
    .then(response => response.json())
    // this response.json() again gives a promise which when resolved gives us a users array which we need and now we can set the state.
    .then(users => this.setState({monsters: users}))
  }

  render(){
    return(
      <div className='App'>
        <CardList name="Dhruv"> {this.state.monsters.map(monster => ( <h1 key={monster.id}>{monster.name}</h1> ))} </CardList>
        
      </div>
    )
  }
}

export default App;
