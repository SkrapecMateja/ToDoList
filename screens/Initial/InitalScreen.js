import React, { Component } from "react";
import { Button, View, Text } from "react-native";

import styles from "./InitalScreen.styles";
import PrimaryButton from "../../common/PrimaryButton/PrimaryButton";

class InitalScreen extends Component {
  static navigationOptions = {
    header: null
  };
  openRegisterScreen = () => {
    this.props.navigation.navigate("Register");
  };
  openLoginScreen = () => {
    this.props.navigation.navigate("Login");
  };

  render() {
    return (
      <View style={styles.background}>
        <Text style={styles.welcomeText}> {"Welcome to"} </Text>
        <Text style={styles.appNameText}> {"Donny"} </Text>
        <PrimaryButton
          text={"Log in"}
          onPress={this.openLoginScreen}
          style={styles.loginButton}
        />
        <PrimaryButton
          text={"Register"}
          onPress={this.openRegisterScreen}
          style={styles.registerButton}
        />
      </View>
    );
  }
}

export default InitalScreen;
