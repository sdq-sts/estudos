const initialState = {
  counter: 0,
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INC_COUNTER':
      return {
        ...state,
        counter: state.counter + 1,
        results: [ state.counter, ...state.results ]
      }
    case 'ADD_COUNTER':
      return {
        ...state,
        counter: state.counter + action.value,
        results: [ state.counter,...state.results ]
      }
    default:
      return state
  }
}

export default reducer;
