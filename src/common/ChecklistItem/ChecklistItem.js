import React, { Component } from "react";
import { TextInput, View, Image, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";

import styles from "./CheklistItem.styles";
import colors from "../../constants/colors";

import checkedImage from "../../images/checked.png";
import uncheckedImage from "../../images/unchecked.png";
import deleteImage from "../../images/delete.png";

class ChecklistItem extends Component {
  handleTextChange = text => {
    let index = this.props.index;
    this.props.onTextChange(text, index);
  };

  render() {
    const {
      checked,
      index,
      onCheckPressed,
      onDeletePressed,
      onTextChange,
      text
    } = this.props;

    let imageSource = checked ? checkedImage : uncheckedImage;

    return (
      <View style={styles.wrapperView}>
        <View style={styles.checkedWrapped}>
          <TouchableHighlight
            onPress={() => onCheckPressed(index)}
            underlayColor={colors.clearColor}
            style={styles.checkedButton}
          >
            <Image source={imageSource} style={styles.checkedImage} />
          </TouchableHighlight>
          <TextInput
            style={styles.textInput}
            placeholderTextColor={colors.placeholderColor}
            placeholder={"Empty item"}
            value={text}
            onChangeText={this.handleTextChange}
          />
        </View>
        <TouchableHighlight
          onPress={() => onDeletePressed(index)}
          underlayColor={colors.clearColor}
          style={styles.deleteButton}
        >
          <Image source={deleteImage} style={styles.deleteImage} />
        </TouchableHighlight>
      </View>
    );
  }
}

ChecklistItem.propTypes = {
  checked: PropTypes.bool,
  index: PropTypes.number,
  onCheckPressed: PropTypes.func,
  onDeletePressed: PropTypes.func,
  onTextChange: PropTypes.func,
  text: PropTypes.string
};

export default ChecklistItem;
