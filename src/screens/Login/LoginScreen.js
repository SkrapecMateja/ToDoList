import React, { Component } from "react";
import { Button, View, Text } from "react-native";
import { connect } from "react-redux";

import styles from "./LoginScreen.styles";
import PrimaryButton from "../../common/PrimaryButton/PrimaryButton";
import TextField from "../../common/TextField/TextField";
import { loginUser } from "../../actions/loginActions";

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

  componentWillReceiveProps = nextProps => {
    if (nextProps.loggedInUser) {
      this.props.navigation.navigate("App");
    }
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

  login = () => {
    const { email, password } = this.state;
    this.props.loginUser(email, password);
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
          autoFocus={true}
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
        {this.props.error && (
          <Text style={styles.errorMsg}>{this.props.error}</Text>
        )}
      </View>
    );
  }
}

const mapStateToProps = ({ login }) => ({
  error: login.error,
  loggedInUser: login.loggedInUser
});

export default connect(mapStateToProps, { loginUser })(LoginScreen);
