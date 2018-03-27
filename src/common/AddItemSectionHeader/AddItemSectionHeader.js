import React, { Component } from "react";
import { TouchableHighlight, View, Image, Text } from "react-native";
import PropTypes from "prop-types";

import colors from "../../constants/colors";
import addIcon from "../../images/add_red.png";
import styles from "./AddItemSectionHeader.styles";

class AddItemButton extends Component {
  render() {
    const { onPress, text } = this.props;

    return (
      <View style={styles.outerWrapperView}>
        <View style={styles.lineView} />
        <View style={styles.wrapperView}>
          <Text style={styles.text}>{text}</Text>
          <TouchableHighlight
            onPress={onPress}
            underlayColor={colors.primaryColor}
            style={styles.addButton}
          >
            <Image source={addIcon} />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

AddItemButton.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ])
};

export default AddItemButton;
