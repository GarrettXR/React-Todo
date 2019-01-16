import React, { Component } from 'react';
import '../styles/App.css';
import { storeTodos, changeFilter, removeCompleted } from '../actions/todos';
import TodoList from './TodoList'
import { connect } from 'react-redux'

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

  showAll = (e) => {
    e.preventDefault()
    changeFilter("all")
  }

  showComplete = (e) => {
    e.preventDefault()
    changeFilter("complete")
  }

  showIncomplete = (e) => {
    e.preventDefault()
    changeFilter("incomplete")
  }

  deleteCompleted = (e) => {
    e.preventDefault()
    removeCompleted(true)
  }

  render() {
    return (
      <div>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
            <input  onChange={this.handleChange} className="todoEntry" value={this.state.todo} type="text" name="todo" placeholder="I have todo..." />
        </form>
        <TodoList />
        <div id="bottom">
          <p>Incomplete Tasks {this.props.count}</p>
          <div><button onClick={this.showAll}>All</button><button onClick={this.showComplete}>Complete</button><button onClick={this.showIncomplete}>Incomplete</button></div>
          <button onClick={this.deleteCompleted}>Clear All Completed</button>
        </div>
      </div>
    );
  }
}
function mapAppStateToProps(appState) {
  console.log(appState)
  return {
    count: appState.todoReducer.todos.filter(todo => todo.completed === false).length}
}

export default connect(mapAppStateToProps)(Todo);

