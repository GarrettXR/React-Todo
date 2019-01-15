const initialState = {
    todos: []
  }
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case 'STORE_TODOS':
        return {...state, todos: action.payload }
      default:
        return state
    }
  }