import React, { Component } from "react";
import { TouchableHighlight, View, Text } from "react-native";
import PropTypes from "prop-types";

import styles from "./PrimaryButton.styles";
import colors from "../../constants/colors";

class PrimaryButton extends Component {
  render() {
    const { onPress, text, style } = this.props;

    return (
      <TouchableHighlight
        style={[styles.button, style]}
        onPress={onPress}
        underlayColor={colors.primaryColor}
      >
        <View>
          <Text style={styles.buttonText}>{text}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

PrimaryButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default PrimaryButton;
