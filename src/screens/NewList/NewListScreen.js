import React, { Component } from "react";
import { View, SectionList, Text } from "react-native";

import styles from "./NewListScreen.styles";
import ListNameTextField from "../../common/ListNameTextField/ListNameTextField";
import HeaderButton from "../../common/HeaderButton/HeaderButton";
import HeaderButtonType from "../../common/HeaderButton/HeaderButtonType";
import AddItemButton from "../../common/AddItemButton/AddItemButton";
import AddItemSectionHeader from "../../common/AddItemSectionHeader/AddItemSectionHeader";

class NewListScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerLeft: (
        <HeaderButton
          type={HeaderButtonType.back}
          onPress={params.handleBack}
        />
      ),
      headerRight: (
        <HeaderButton
          type={HeaderButtonType.save}
          onPress={params.handleSave}
        />
      )
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      listName: ""
    };
  }

  componentWillMount() {
    this.props.navigation.setParams({
      handleBack: this.goBack,
      handleSave: this.save
    });
  }

  goBack = () => {
    this.props.navigation.navigate("ToDoLists");
  };

  save = () => {
    //@TODO save on backend
    this.props.navigation.navigate("ToDoLists");
  };

  listNameChanged = text => {
    this.setState({
      listName: text
    });
  };

  pressedAddNewItem = () => {
    console.log("Press");
  };

  render() {
    return (
      <View style={styles.background}>
        <ListNameTextField
          placeholder="Enter list name"
          value={this.state.listName}
          onChangeText={this.listNameChanged}
          style={styles.listName}
        />
        <SectionList
          renderItem={({ item, index, section }) => <Text>{"ListItem"}</Text>}
          renderSectionHeader={({ section }) => (
            //<AddItemButton onPress={this.pressedAddNewItem} />
            <AddItemSectionHeader text={"Invited users"} />
          )}
          sections={[
            { title: "Add", data: [] },
            { title: "Invited users", data: [] },
            { title: "Images", data: [] }
          ]}
        />
      </View>
    );
  }
}

export default NewListScreen;
