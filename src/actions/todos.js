import store from '../store'
import shortid from 'shortid'

export function storeTodos(todo) {
    console.log(todo)

    store.dispatch({
      type: 'STORE_TODOS', 
      payload: {
          id: shortid.generate(),
          todo: todo,
          completed: false
      }
    })
}

export function deleteTodos(id) {
    console.log(id)

    store.dispatch({
        type: 'DELETE_TODOS',
        id: id
    })
}

export function toggleStatus(id) {
    console.log(id)

    store.dispatch({
        type: 'TOGGLE_STATUS',
        id: id
    })
}

export function changeFilter(str) {
    console.log(str)

    store.dispatch({
        type: 'CHANGE_FILTER',
        filter: str
    })
}

export function removeCompleted(status) {
    console.log(status)

    store.dispatch({
        type: 'DELETE_COMPLETED',
        completed: status
    })
}