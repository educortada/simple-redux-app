// reducers.js
export const sayHello = (state = {}, action) => {
  switch (action.type) {
    case 'ACTIVATE':
      console.log('action', action)
      return action.text;
    case 'CLOSE':
      console.log('Action', action)
      return {};
    default:
      return state;
  }
}