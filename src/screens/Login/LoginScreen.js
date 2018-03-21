import React, { Component } from "react";
import { Button, View } from "react-native";

import styles from "./LoginScreen.styles";
import PrimaryButton from "../../common/PrimaryButton/PrimaryButton";
import TextField from "../../common/TextField/TextField";

class LoginScreen extends Component {
  static navigationOptions = {
    title: "Log in"
  };

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  emailTextChanged = text => {
    this.setState({
      email: text
    });
  };

  passwordTextChanged = text => {
    this.setState({
      password: text
    });
  };

  login = () => {};

  render() {
    return (
      <View style={styles.background}>
        <TextField
          placeholder="Email"
          value={this.state.email}
          onChangeText={this.emailTextChanged}
          style={styles.emailField}
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
        />
        <TextField
          placeholder="Password"
          value={this.state.password}
          onChangeText={this.passwordTextChanged}
          secureTextEntry={true}
          style={styles.passwordField}
          autoCorrect={false}
          autoCapitalize="none"
        />
        <PrimaryButton
          text="Log in"
          onPress={this.login}
          style={styles.loginButton}
        />
      </View>
    );
  }
}

export default LoginScreen;
