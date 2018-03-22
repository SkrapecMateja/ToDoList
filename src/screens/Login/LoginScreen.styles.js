import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    alignItems: "center"
  },
  emailField: {
    marginTop: 130
  },
  passwordField: {
    marginTop: 24
  },
  loginButton: {
    marginTop: 50
  },
  errorMsg: {
    color: "red",
    marginTop: 20
  }
});
