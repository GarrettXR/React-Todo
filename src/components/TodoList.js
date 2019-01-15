import { connect } from 'react-redux'
import React, { Component } from 'react';

class List extends Component {
    
    render() {
      return (
        <div>
          {this.state}
        </div>
      );
    }
  }
  
  function mapStateToProps(appState) {
    console.log(appState.todoReducer.todos)
    return {
      todos: appState.todoReducer.todos
    }
  }

  export default connect(mapStateToProps)(List);
  