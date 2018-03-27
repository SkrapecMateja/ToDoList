import React, { Component } from "react";
import { View, Text } from "react-native";

import styles from "./ToDoListsScreen.styles";
import HeaderButton from "../../common/HeaderButton/HeaderButton";
import HeaderButtonType from "../../common/HeaderButton/HeaderButtonType";

class ToDoListsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: "Lists",
      headerLeft: (
        <HeaderButton
          type={HeaderButtonType.back}
          onPress={params.handleBack}
        />
      ),
      headerRight: (
        <HeaderButton type={HeaderButtonType.add} onPress={params.addItem} />
      )
    };
  };

  componentWillMount() {
    this.props.navigation.setParams({
      handleBack: this.goBack,
      addItem: this.addListItem
    });
  }

  goBack = () => {
    //@TODO logout
    this.props.navigation.navigate("Auth");
  };

  addListItem = () => {
    this.props.navigation.navigate("NewList");
  };

  render() {
    return <View style={styles.background} />;
  }
}

export default ToDoListsScreen;
