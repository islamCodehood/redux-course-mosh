import reducer from './reducer'

function createStore(reducer) {
  let state;

  let listeners = [];
  //1. getState
  function getState() {
    console.log(state);
    return state;
  }

  //2. dispatch
  function dispatch(action) {
    state = reducer(state, action);
    console.log(state);
    for (const listener of listeners) {
      listener();
    }
  }

  //3. subscribe
  function subscribe(listener) {
    listeners.push(listener);
    console.log(listeners)
  }

  return {
    getState,
    dispatch,
    subscribe,
  };
}

export default createStore(reducer);
