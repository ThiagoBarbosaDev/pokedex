import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Pokedex from './pages/Pokedex/Pokedex';
import PokemonDetails from './pages/PokemonDetails/PokemonDetails';

function App() {
  return (
    <Switch>
      <Route path="/:name" component={ PokemonDetails } />
      <Route path="/" component={ Pokedex } />
    </Switch>
  );
}

export default App;
