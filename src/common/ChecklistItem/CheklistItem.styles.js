import { StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/colors";

export default StyleSheet.create({
  wrapperView: {
    paddingLeft: 24,
    paddingRight: 24,
    flexDirection: "row",
    height: 33,
    justifyContent: "space-between"
  },
  checkedWrapped: {
    flexDirection: "row"
  },
  checkedButton: {
    width: 17,
    height: 17,
    alignSelf: "center"
  },
  checkedImage: {
    width: 17,
    height: 17
  },
  textInput: {
    fontSize: 14,
    color: colors.textColor,
    marginLeft: 10,
    alignSelf: "center"
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
