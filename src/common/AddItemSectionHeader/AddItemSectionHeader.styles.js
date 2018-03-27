import { StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/colors";

export default StyleSheet.create({
  outerWrapperView: {
    height: 62,
    width: Dimensions.get("window").width
  },
  lineView: {
    height: 1,
    width: Dimensions.get("window").width - 32,
    backgroundColor: colors.lineColor,
    marginTop: 16,
    alignSelf: "center"
  },
  wrapperView: {
    flexDirection: "row",
    paddingLeft: 24,
    paddingRight: 16,
    marginTop: 10,
    justifyContent: "space-between"
  },
  addButton: {
    width: 17,
    height: 17
  },
  text: {
    color: colors.textColor
  }
});
