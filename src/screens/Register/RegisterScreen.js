import React, { Component } from "react";
import { Button, View, Alert } from "react-native";

import styles from "./RegisterScreen.styles";
import PrimaryButton from "../../common/PrimaryButton/PrimaryButton";
import TextField from "../../common/TextField/TextField";

class RegisterScreen extends Component {
  static navigationOptions = {
    title: "Register"
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

  validateInputs = () => {
    if (this.validateEmail() === true && this.validatePassword() === true) {
      this.register;
    }
  };

  validateEmail = () => {
    let email = this.state.email;
    let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (emailReg.test(email) === false) {
      Alert.alert("Email not valid", "Please enter a valid email.", [
        { text: "OK" }
      ]);
      return false;
    } else {
      return true;
    }
  };

  validatePassword = () => {
    let password = this.state.password;

    if (password.length <= 6) {
      Alert.alert(
        "Password too short",
        "Password must have at least 6 characters.",
        [{ text: "OK" }]
      );
      return false;
    } else {
      return true;
    }
  };

  register = () => {};

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
          text={"Register"}
          onPress={this.validateInputs}
          style={styles.registerButton}
        />
      </View>
    );
  }
}

export default RegisterScreen;
