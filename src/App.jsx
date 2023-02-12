import React from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Pokedex from './pages/Pokedex/Pokedex';

function App() {
  return (
    <Switch>
      <Route path="/:id">
        <Link to="/"> Go back </Link>
      </Route>
      <Route path="/" component={ Pokedex } />
    </Switch>
  );
}

export default App;
