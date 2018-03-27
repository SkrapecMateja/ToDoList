import React, { Component } from "react";
import { Text, View, Image, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";

import styles from "./InvitedUsersListItem.styles";
import colors from "../../constants/colors";

import deleteImage from "../../images/delete.png";

class InvitedUsersListItem extends Component {
  render() {
    const { name, email, onDeletePressed, index } = this.props;

    return (
      <View style={styles.wrapperView}>
        <View style={styles.nameWrapped}>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.text}>{email}</Text>
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

InvitedUsersListItem.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  onDeletePressed: PropTypes.func,
  index: PropTypes.number
};

export default InvitedUsersListItem;
