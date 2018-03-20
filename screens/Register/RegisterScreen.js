import React, { Component } from "react";
import { Button, View, Alert } from "react-native";

import styles from "./RegisterScreen.styles";
import PrimaryButton from "../../common/PrimaryButton/PrimaryButton";

class RegisterScreen extends Component {
  static navigationOptions = {
    title: "Register"
  };

  validateInputs = () => {
    if (this.validateEmail === true && this.validatePassword === true) {
      this.login;
    }
  };

  validateEmail = () => {
    let email = this.state.email;
    let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (emailReg.test(email) === false) {
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
  render() {
    return (
      <View style={styles.background}>
        <PrimaryButton text={"Register"} onPress={() => {}} />
      </View>
    );
  }
}

export default RegisterScreen;
