import React, { Component } from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Header from './components/layout/Header';
import AddToDo from './components/AddToDo';
import ToDos from './components/ToDos';
import About from './components/pages/About';
// import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }))
  }

  //* Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }

  //* delete To Do
  delToDo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  //* Add To Do
  AddToDo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));

    // this.setState({ todos: [...this.state.todos, newToDo] });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Routes>
              <Route exact path='/' element={
                <React.Fragment>
                  <AddToDo AddToDo={this.AddToDo} />
                  <ToDos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delToDo={this.delToDo} />
                </React.Fragment>
              }> </Route>
              <Route path='/about' element={<About />}> </Route>
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
