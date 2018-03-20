import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default StyleSheet.create({
  button: {
    backgroundColor: "blue",
    justifyContent: "center",
    width: 150,
    height: 40,
    backgroundColor: colors.primaryColor,
    borderRadius: 4
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    textAlign: "center"
  }
});
