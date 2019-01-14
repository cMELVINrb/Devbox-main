import React, { Component } from 'react';

import Todos from './components/Todos'
import './App.css'; //serves as the global css

class App extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'Start a meeting',
                execution: 'Inform all group members via email'
            },
            {
                id: 2,
                title: 'Start a meeting',
                execution: 'Inform all group members via email'
            },
            {
                id: 3,
                title: 'Start a meeting',
                execution: 'Inform all group members via email'
            }
        ]
    }

    render() {
    return (
      <div className="App">
        <Todos />
      </div>
    );
  }
}

export default App;
