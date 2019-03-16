import React, { Component } from 'react';
import './App.css';
import PokemonCard from './app/views/PokemonCard';
import { connect } from 'react-redux';
import { pokemonOperations} from "./app/redux/pokemon";

const mapStateToProps = state => ({
  ...state.pokemon,
});

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

const mapDispatchToProps = dispatch => {
  const fetchPokemon = id => dispatch(pokemonOperations.fetchPokemon(id));

  return { fetchPokemon };
};

class App extends Component {
  componentDidMount() {
    this.props.fetchPokemon({ id: 7 });
    this.props.fetchPokemon({ id: 4 });
    this.props.fetchPokemon({ id: 1 });
  }

  fetchRandomPokemon = () => {
    const randomInt = getRandomInt(50);
    this.props.fetchPokemon({ id: randomInt, index: 3 });
  };

  render() {
    return (
      <div className="app">
        <h1>Pokemon Viewer</h1>
        {
          this.props.pokemon.map(p => <PokemonCard key={p.id} pokemon={p}/>)
        }
        <button onClick={this.fetchRandomPokemon}>Random Pokemon</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
