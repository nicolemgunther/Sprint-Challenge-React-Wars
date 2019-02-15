import React, { Component } from 'react';
import './App.css';
import SWCardList from './components/SWCardList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
    // this.getFilms('https://swapi.co/api/films/');
    // this.getSpecies('https://swapi.co/api/species/');
    // this.getPlanets('https://swapi.co/api/planets/');
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
  
  // getFilms = URL => {
  //   fetch(URL)
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(data => {
  //       this.setState({ starwarsFilms: data.results });
  //     })
  //     .catch(err => {
  //       throw new Error(err);
  //     });
  // };
  
  // getSpecies = URL => {
  //   fetch(URL)
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(data => {
  //       this.setState({ starwarsSpecies: data.results });
  //     })
  //     .catch(err => {
  //       throw new Error(err);
  //     });
  // };
  
  // getPlanets = URL => {
  //   fetch(URL)
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(data => {
  //       this.setState({ starwarsPlanets: data.results });
  //     })
  //     .catch(err => {
  //       throw new Error(err);
  //     });
  // };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="characters-all">
          <SWCardList starwarsChars = {this.state.starwarsChars} />
        </div>
      </div>
    );
  }
}

export default App;
