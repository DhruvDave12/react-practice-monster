import React from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      // initial state is an empty array we are gonna fetch through api and solve it.
      monsters: [],
      searchField: '',
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
    // On every state change this render method is always called on.
    // Now we will filter the monster array according to the search field
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())  
    );
    return(
      <div className='App'>
        <h1>Monster Rolodex</h1>
        
        <SearchBox placeholder = "Search Monster" handleChange = {
          // we pass that second callback parameter so that it updates the state of searchField in real time.
          e => {this.setState({searchField: e.target.value})}} />
        <CardList monsters = {filteredMonsters}/>         
      
      </div>
    )
  }
}

export default App;
