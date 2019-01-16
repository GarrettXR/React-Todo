const initialState = {
    todos: [],
    filter: 'all'
  }
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case 'STORE_TODOS':
        return {...state,todos: [...state.todos, action.payload] }
      case 'DELETE_TODOS':
        return {...state, todos: state.todos.filter(todo => todo.id !== action.id)}
      case 'TOGGLE_STATUS':
        return {...state, todos: state.todos.map(todo => {
            if(todo.id === action.id){
            todo.completed = !todo.completed
            }
            return todo
        })}
        case 'CHANGE_FILTER':
            return  {...state, filter: action.filter}
        case 'DELETE_COMPLETED':
            return {...state, todos: state.todos.filter(todo => todo.completed === false)}
      default:
        return state 
    }
}
