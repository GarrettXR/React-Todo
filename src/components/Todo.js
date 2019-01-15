import React, { Component } from 'react';
import '../App.css';
import { storeTodos } from '../actions/todos';
import TodoList from './TodoList'

class Todo extends Component {
  state= {
      todo: ''
  }

  handleChange = (e) => {
      this.setState({
     [e.target.name]: e.target.value
    }) 
  }
  handleSubmit = (e) => {
      e.preventDefault()
      storeTodos({
          todo: this.state.todo
      })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input  onChange={this.handleChange} className="todoEntry" type="text" name="todo" placeholder="I have todo..." />
            <button type="submit">Submit</button>
        </form>
        <TodoList />
      </div>
    );
  }
}

export default Todo;
