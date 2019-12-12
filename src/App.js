import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CharacterList from './Components/CharacterList';
import Character from './Components/Character';

function App() {
  return (
    <div className="App container">
      <Router>
        <Switch>
          <Route exact path="/character:userId" component={Character} />
          <Route path='/' component={CharacterList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
