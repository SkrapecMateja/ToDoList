import React, { Component } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import firebase from "react-native-firebase";

import store from "./store";
import Navigation from "./Navigation";
import { userLoggedIn, userLoggedOut } from "./actions/userMonitoringActions";

class App extends Component {
  componentDidMount() {
    this.authSubscription = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        store.dispatch(userLoggedIn(user));
      } else {
        store.dispatch(userLoggedOut());
      }
    });
  }

  componentWillUnmount() {
    this.authSubscription();
  }

  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

export default App;
