import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Pokedex from './pages/Pokedex/Pokedex';

function App() {
  return (
    <Switch>
      <Route path="/" component={ Pokedex } />
    </Switch>
  );
}

export default App;
