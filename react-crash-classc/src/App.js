import { Component } from 'react';
import './App.css';
import ToDos from './components/ToDos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false,
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: true,
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false,
      },
    ]
  }
  render() {
    return (
      <div className="App">
        <ToDos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
