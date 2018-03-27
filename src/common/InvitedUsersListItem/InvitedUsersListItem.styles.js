import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default StyleSheet.create({
  wrapperView: {
    paddingLeft: 24,
    paddingRight: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 6,
    paddingBottom: 6
  },
  nameWrapped: {
    alignSelf: "center"
  },
  text: {
    fontSize: 14,
    color: colors.textColor
  },
  deleteButton: {
    width: 12,
    height: 12,
    alignSelf: "center"
  },
  deleteImage: {
    width: 12,
    height: 12
  }
});
