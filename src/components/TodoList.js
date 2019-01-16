import { connect } from 'react-redux'
import React, { Component } from 'react';
import TodoItem from './TodoItem'

class List extends Component {
    render() {
       
        const activities = this.props.todos.map( v => (
            <TodoItem key={v.id} {...v} />
        ))

      return (
        <div>
          {activities}
        </div>
      );
    }
  }
  
  function mapAppStateToProps(appState) {
    console.log(appState)
   if(appState.todoReducer.filter === 'all'){
       return {todos: appState.todoReducer.todos}
   }
   if(appState.todoReducer.filter === 'complete'){
       return{todos: appState.todoReducer.todos.filter(todo => todo.completed === true)}
   }
   if(appState.todoReducer.filter === 'incomplete'){
    return{todos: appState.todoReducer.todos.filter(todo => todo.completed === false)}
}
  }

  export default connect(mapAppStateToProps)(List);
  