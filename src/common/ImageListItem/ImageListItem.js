import React, { Component } from "react";
import { TouchableHighlight, View, Image } from "react-native";
import PropTypes from "prop-types";

import styles from "./ImageListItem.styles";
import colors from "../../constants/colors";

import deleteImage from "../../images/delete.png";

class ImageListItem extends Component {
  render() {
    const { onDeletePressed, imageSource, index } = this.props;

    console.log(imageSource);

    return (
      <View style={styles.wrapperView}>
        <Image source={imageSource} style={styles.image} />
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

ImageListItem.propTypes = {
  onDeletePressed: PropTypes.func.isRequired,
  imageSource: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};

export default ImageListItem;
