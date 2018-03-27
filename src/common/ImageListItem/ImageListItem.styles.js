import { StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/colors";

export default StyleSheet.create({
  wrapperView: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 5,
    paddingBottom: 5,
    height: 171
  },
  image: {
    height: 161
  },
  deleteButton: {
    width: 12,
    height: 12,
    alignSelf: "center",
    position: "absolute",
    right: 26,
    top: 15
  },
  deleteImage: {
    width: 12,
    height: 12
  }
});
