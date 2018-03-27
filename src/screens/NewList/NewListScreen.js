import React, { Component } from "react";
import { View, SectionList, Text } from "react-native";

import styles from "./NewListScreen.styles";
import ListNameTextField from "../../common/ListNameTextField/ListNameTextField";
import HeaderButton from "../../common/HeaderButton/HeaderButton";
import HeaderButtonType from "../../common/HeaderButton/HeaderButtonType";
import AddItemButton from "../../common/AddItemButton/AddItemButton";
import AddItemSectionHeader from "../../common/AddItemSectionHeader/AddItemSectionHeader";
import ChecklistItem from "../../common/ChecklistItem/ChecklistItem";

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
      listName: "",
      checklistItems: [],
      invitedUsers: [],
      images: []
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

  // checklist
  listNameChanged = text => {
    this.setState({
      listName: text
    });
  };

  pressedAddNewItem = () => {
    let checklistItem = { checked: false, name: "" };
    let newItems = [...this.state.checklistItems, checklistItem];

    this.setState({
      checklistItems: newItems
    });
  };

  checkedChecklistItem = index => {
    let item = this.state.checklistItems[index];
    let modifieditem = { ...item, checked: !item.checked };
    let newItems = [
      ...this.state.checklistItems.slice(0, index),
      modifieditem,
      ...this.state.checklistItems.slice(index + 1)
    ];

    this.setState({
      checklistItems: newItems
    });
  };

  checklistNameChanged = (name, index) => {
    let item = this.state.checklistItems[index];
    let modifieditem = { ...item, name: name };
    let newItems = [
      ...this.state.checklistItems.slice(0, index),
      modifieditem,
      ...this.state.checklistItems.slice(index + 1)
    ];

    this.setState({
      checklistItems: newItems
    });
  };

  deleteChecklistItem = index => {
    let newItems = [
      ...this.state.checklistItems.slice(0, index),
      ...this.state.checklistItems.slice(index + 1)
    ];

    this.setState({
      checklistItems: newItems
    });
  };

  //users
  pressedAddNewUser = () => {
    console.log("User");
  };

  //images
  pressedAddNewImage = () => {
    console.log("Image");
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
          stickySectionHeadersEnabled={false}
          style={styles.sectionList}
          renderItem={({ item, index, section }) => {
            if (section.title == "Add") {
              let checklistItem = this.state.checklistItems[index];
              return (
                <ChecklistItem
                  checked={checklistItem.checked}
                  index={index}
                  onCheckPressed={this.checkedChecklistItem}
                  onDeletePressed={this.deleteChecklistItem}
                  text={this.checkedChecklistItem.name}
                  onTextChange={this.checklistNameChanged}
                />
              );
            } else {
              <Text>{"sad"}</Text>;
            }
          }}
          renderSectionHeader={({ section }) => {
            if (section.title === "Add") {
              return <AddItemButton onPress={this.pressedAddNewItem} />;
            } else if (section.title === "Invited users") {
              return (
                <AddItemSectionHeader
                  text={section.title}
                  onPress={this.pressedAddNewUser}
                />
              );
            } else {
              return (
                <AddItemSectionHeader
                  text={section.title}
                  onPress={this.pressedAddNewImage}
                />
              );
            }
          }}
          sections={[
            { title: "Add", data: this.state.checklistItems },
            { title: "Invited users", data: this.state.invitedUsers },
            { title: "Images", data: this.state.images }
          ]}
        />
      </View>
    );
  }
}

export default NewListScreen;
