import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './screens/home/home';
import WordDescription from './screens/word_description/word_description';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/word/:id" component={WordDescription}/>
        </Switch>
      </div>
    );
  }
}

export default App;
