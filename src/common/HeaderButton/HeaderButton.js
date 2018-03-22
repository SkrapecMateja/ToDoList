import React, { Component } from "react";
import { TouchableHighlight, View, Image } from "react-native";
import PropTypes from "prop-types";

import colors from "../../constants/colors";

class HeaderButton extends Component {
  render() {
    const { onPress, type } = this.props;

    const margin = type.isLeft ? { marginLeft: 16 } : { marginRight: 16 };
    return (
      <TouchableHighlight onPress={onPress} underlayColor={colors.primaryColor}>
        <Image
          source={type.imageSource}
          style={[{ width: type.width, height: type.height }, margin]}
        />
      </TouchableHighlight>
    );
  }
}

HeaderButton.propTypes = {
  onPress: PropTypes.func,
  type: PropTypes.shape({
    imageSource: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.node,
    isLeft: PropTypes.isLeft
  }).isRequired
};

export default HeaderButton;
