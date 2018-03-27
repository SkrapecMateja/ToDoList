import { StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/colors";

export default StyleSheet.create({
  button: {
    height: 53,
    justifyContent: "center",
    width: Dimensions.get("window").width
  },
  wrapperView: {
    flexDirection: "row",
    paddingLeft: 24,
    paddingRight: 24
  },
  addImage: {
    width: 17,
    height: 17,
    alignSelf: "center"
  },
  text: {
    color: colors.primaryColor,
    alignSelf: "center",
    marginLeft: 10
  }
});
