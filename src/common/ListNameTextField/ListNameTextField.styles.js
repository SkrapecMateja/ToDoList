import { StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/colors";

export default StyleSheet.create({
  textInput: {
    fontSize: 18,
    color: colors.textColor,
    height: 30,
    width: Dimensions.get("window").width,
    paddingLeft: 24,
    paddingRight: 24
  }
});
