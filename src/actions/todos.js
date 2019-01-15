import store from '../store'

export function storeTodos(todo) {
 console.log(todo)
 
    store.dispatch({
      type: 'STORE_TODOS', 
      payload: todo
    })
}