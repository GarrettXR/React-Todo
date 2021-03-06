import React, { Component } from 'react';
import { Provider } from 'react-redux'
import '../styles/App.css';
import Todo from './Todo'
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import store from '../store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route path="/" exact component={Todo} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
