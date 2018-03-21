import React, { Component } from "react";
import { Button, View, Alert } from "react-native";
import firebase from "react-native-firebase";

import styles from "./RegisterScreen.styles";
import PrimaryButton from "../../common/PrimaryButton/PrimaryButton";
import TextField from "../../common/TextField/TextField";

class RegisterScreen extends Component {
  static navigationOptions = {
    title: "Register"
  };

  state = {
    email: "",
    password: ""
  };

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
      this.register();
    }
  };

  isEmailValid = email => {
    const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (emailReg.test(email) === false) {
      Alert.alert("Email not valid", "Please enter a valid email.", [
        { text: "OK" }
      ]);
      return false;
    }
    return true;
  };

  isPasswordValid = password => {
    if (password.length <= 6) {
      Alert.alert(
        "Password too short",
        "Password must have at least 6 characters.",
        [{ text: "OK" }]
      );
      return false;
    }
    return true;
  };

  register = async () => {
    const { email, password } = this.state;
    const user = await firebase
      .auth()
      .createUserAndRetrieveDataWithEmailAndPassword(email, password);
    if (user) {
      this.props.navigation.navigate("App");
    }
  };

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
          text="Register"
          onPress={this.register}
          style={styles.registerButton}
        />
      </View>
    );
  }
}

export default RegisterScreen;
