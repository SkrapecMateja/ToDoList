import React, { Component } from "react";
import { View, Text } from "react-native";

class LoadingScreen extends Component {
  componentDidMount = () => {
    setTimeout(() => {
      this.props.navigation.navigate("Initial");
    }, 1000);
  };

  render() {
    return <View style={{ flex: 1, backgroundColor: "red" }} />;
  }
}

export default LoadingScreen;
