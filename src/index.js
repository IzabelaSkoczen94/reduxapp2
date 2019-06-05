import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

//function reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, counter: state.counter + 1};
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}

const store = createStore(reducer, { counter: 0});

class ManagedCounter extends React.Component {
  static propTypes = {
    counter: PropTypes.Number,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func
  };

render()  {
  const { counter, onIncrement, onDecrement } = this.props;

  return (
    <div>
      <div>{counter}</div>
      <button onClick={onDecrement}>-</button>
      <button onClick={onIncrement}>+</button>
    </div>
  );
}
}

const mapStateToProps = (state) => {
  return state; 
}

// function increment(value) {
//   return {
//     type: 'INCREMENT',
//     payload: value
//   }}
  
// function decrement(value) {
//   return {
//     type: 'INCREMENT',
//     payload: value
//   }}


const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({ type: 'INCREMENT' }),
    onDecrement: () => dispatch({ type: 'DECREMENT' })
    // onIncrement: () => increment(),
    // onDecrement: () => decrement()
  }
};

ManagedCounter = connect(mapStateToProps, mapDispatchToProps)(ManagedCounter);

render(
  <Provider store={store}>
    <ManagedCounter />
  </Provider>
  , document.getElementById('root')
);



