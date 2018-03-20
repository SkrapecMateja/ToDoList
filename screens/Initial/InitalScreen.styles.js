import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    flexDirection: "column",
    alignItems: "center"
  },
  welcomeText: {
    fontSize: 18,
    color: colors.textColor,
    marginTop: 44
  },
  appNameText: {
    fontSize: 34,
    color: colors.primaryColor,
    marginTop: 7
  },
  loginButton: {
    position: "absolute",
    bottom: 94
  },
  registerButton: {
    position: "absolute",
    bottom: 44
  }
});
