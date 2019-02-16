import React, { Component } from 'react';
import './App.css';
import SWCardList from './components/SWCardList';
import SWHeader from './components/SWHeader';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      theme: {
        darkside: false
      }
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };
  
  joinRebels = () =>{
    if (this.state.theme.darkside === true){
      this.setState({
        theme: {darkside: false}
      }); 
    }
  }

  joinEmpire = () =>{
    if (this.state.theme.darkside === false){
      this.setState({
        theme: {darkside: true}
      }); 
    }
  }

  render() {
    return (
      <div className="App">
        <SWHeader
          joinEmpire={this.joinEmpire}
          joinRebels={this.joinRebels}
          theme = {this.state.theme}
        />
        
        <SWCardList
          starwarsChars = {this.state.starwarsChars}
          theme = {this.state.theme}
        />
      </div>
    );
  }
}

export default App;
