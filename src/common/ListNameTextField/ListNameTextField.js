import React, { Component } from "react";
import { TextInput, View } from "react-native";
import PropTypes from "prop-types";

import styles from "./ListNameTextField.styles";
import colors from "../../constants/colors";

class ListNameTextField extends Component {
  render() {
    const { style, ...other } = this.props;
    return (
      <TextInput
        {...other}
        style={[styles.textInput, style]}
        placeholderTextColor={colors.placeholderColor}
      />
    );
  }
}

ListNameTextField.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ])
};

export default ListNameTextField;
