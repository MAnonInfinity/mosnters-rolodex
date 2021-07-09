import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component.jsx'

class App extends Component{

  constructor(){
    super();
    this.state={
      monsters: [],
      searchField: ""
    };

    // Binding event handlers to THIS instance inside the constructor (best way to bind)
    this.handleChange = this.handleChange.bind(this);
  }

  // componentDidMount(){
  //   fetch("https://jsonplaceholder.typicode.com/users")  // Making an API request
  //    .then(resonse => resonse.json())
  //    .then(users => this.setState({ monsters: users }))
  //    .catch(err => console.log("I have errored"))
  // }

  async componentDidMount(){
    const url = "https://jsonplaceholder.typicode.com/users"; // Making an API request
    const response  = await fetch(url);
    const data = await response.json();
    this.setState({monsters: data});
  }

  handleChange(e){
    this.setState({searchField: e.target.value});
  }

  // Another way to bind the function to THIS instance (second best way to do bind)
  // handleChange = e => {
  //   this.setState({ searchField: e.target.value });
  // }

  render(){

    const {monsters, searchField} = this.state; // Called Destructring
    // Shortcut way of this
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
