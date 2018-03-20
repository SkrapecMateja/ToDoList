import React, { Component } from "react";
import { TextInput, View } from "react-native";
import PropTypes from "prop-types";

import styles from "./TextField.styles";
import colors from "../../constants/colors";

class TextField extends Component {
  render() {
    const { style, ...other } = this.props;
    return (
      <View style={styles.textWrapper}>
        <TextInput
          {...other}
          style={[styles.textInput, style]}
          placeholderTextColor={colors.placeholderColor}
        />
      </View>
    );
  }
}

export default TextField;
