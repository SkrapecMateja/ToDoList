import React, { Component } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";

import store from "./store";
import Navigation from "./Navigation";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

export default App;
