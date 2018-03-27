import React, { Component } from "react";
import { View, Text } from "react-native";
import firebase from "react-native-firebase";
import { connect } from "react-redux";

class LoadingScreen extends Component {
  componentDidMount = () => {
    if (this.props.loggedInUser) {
      this.props.navigation.navigate("App");
    } else {
      this.props.navigation.navigate("App");
    }
  };

  render() {
    return <View style={{ flex: 1, backgroundColor: "red" }} />;
  }
}
const mapStateToProps = ({ userMonitoring }) => ({
  loggedInUser: userMonitoring.loggedInUser
});

export default connect(mapStateToProps)(LoadingScreen);
