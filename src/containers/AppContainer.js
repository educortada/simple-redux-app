import App from '../App'
import { connect } from 'react-redux';

// mapStateToProps: is used for selecting the part of the data from the store that the connected component needs. 
// Component receives the state as a prop. In this case 'title'.
const mapStateToProps = (state) => {
  console.log('State', state);
  return { title: state.title, subtitle: state.subtitle }
}

// mapDispatchToProps is used for dispatching actions to the store.
// mapDispatchToProps lets you create functions that dispatch when called, and pass those functions as props to your component.
// Argument dispatch: You will normally make use of this by returning new functions that call dispatch() inside themselves,
// and either pass in a plain action object directly or pass in the result of an action creator.
const mapDispatchToProps = (dispatch) => {
  return {
    activate: (text) => dispatch({ type: 'ACTIVATE', text: text }),
    close: () => dispatch({ type: 'CLOSE' })
  }
}

// Connects a React component (in this case App) to a Redux store.
// It provides its connected component with the pieces of the data it needs from the store,
// and the functions it can use to dispatch actions to the store.
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;