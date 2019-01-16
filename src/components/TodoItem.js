import React, { Component } from 'react'
import { deleteTodos, toggleStatus} from '../actions/todos'
import '../styles/App.css'

class TodoItem extends Component {
    deleteTodos = (e) => {
         deleteTodos(this.props.id)
    }

    changeStatus = (e) => {
        toggleStatus(this.props.id)
    }

    render() {
        return (
            <div className="tasks" onClick={this.changeStatus}>
                <span className={this.props.completed ? "complete" : ""}>
                {this.props.todo.todo}
                </span>
                <button id="button1" onClick={this.deleteTodos}>X</button>
            </div>
        )
    }
}

export default TodoItem