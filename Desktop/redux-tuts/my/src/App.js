import { createStore } from 'redux';
import React, { Component } from 'react';

class App extends Component {
  state = {
    result: 1,
    lastValue: [],
    username: "Pranav"

  }
  render() {
    const reducer = (state = this.state, action) => {
      switch (action.type) {
        case "ADD":
          state = {
            ...state,
            result: state.result + action.payload,
            lastValue: [...state.lastValue, action.payload]
          };
          break;
        case "SUBTRACT":
          state = {
            ...state,
            result: state.result - action.payload,
            lastValue: [...state.lastValue, action.payload]
          }
      }
      return state;
    }

    const store = createStore(reducer)
    store.subscribe(() => {
      console.log("store is updated", store.getState());
    });

    store.dispatch({
      type: "ADD",
      payload: 100
    });

    store.dispatch({
      type: "SUBTRACT",
      payload: 20
    });

    return (
      <div>
        HI
    </div>
    )
  }
}
export default App

