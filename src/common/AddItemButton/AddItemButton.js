import React, { Component } from "react";
import { TouchableHighlight, View, Image, Text } from "react-native";
import PropTypes from "prop-types";

import colors from "../../constants/colors";
import addIcon from "../../images/add_red.png";
import styles from "./AddItemButton.styles";

class AddItemButton extends Component {
  render() {
    const { onPress, type, style } = this.props;

    return (
      <TouchableHighlight
        onPress={onPress}
        underlayColor={colors.clearColor}
        style={[styles.button, style]}
      >
        <View style={styles.wrapperView}>
          <Image source={addIcon} style={styles.addIcon} />
          <Text style={styles.text}>{"Add new item"}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

AddItemButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ])
};

export default AddItemButton;
