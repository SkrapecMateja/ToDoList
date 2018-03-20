import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default StyleSheet.create({
  textWrapper: {
    borderBottomColor: colors.placeholderColor,
    borderBottomWidth: 1
  },
  textInput: {
    fontSize: 14,
    color: colors.textColor,
    height: 30,
    width: 200
  }
});
