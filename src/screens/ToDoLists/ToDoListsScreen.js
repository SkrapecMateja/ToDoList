import React, { Component } from "react";
import { View, Text } from "react-native";

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
      )
    };
  };

  componentWillMount() {
    this.props.navigation.setParams({ handleBack: this.goBack });
  }

  goBack = () => {
    //@TODO logout
    this.props.navigation.navigate("Auth");
  };

  render() {
    return <View style={{ flex: 1, backgroundColor: "blue" }} />;
  }
}

export default ToDoListsScreen;
