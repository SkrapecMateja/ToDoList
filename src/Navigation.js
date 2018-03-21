import { StackNavigator, SwitchNavigator } from "react-navigation";

import ContactsScreen from "./screens/Contacts/ContactsScreen";
import InitalScreen from "./screens/Initial/InitalScreen";
import ListDetailsScreen from "./screens/ListDetails/ListDetailsScreen";
import LoadingScreen from "./screens/Loading/LoadingScreen";
import LoginScreen from "./screens/Login/LoginScreen";
import NewListScreen from "./screens/NewList/NewListScreen";
import RegisterScreen from "./screens/Register/RegisterScreen";
import ToDoListsScreen from "./screens/ToDoLists/ToDoListsScreen";

import colors from "./constants/colors";

const AuthNavigation = StackNavigator(
  {
    Initial: {
      screen: InitalScreen
    },
    Login: {
      screen: LoginScreen
    },
    Register: {
      screen: RegisterScreen
    }
  },
  {
    initialRouteName: "Initial",
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.primaryColor
      },
      headerTintColor: "white"
    }
  }
);

const AppNavigation = StackNavigator(
  {
    ToDoLists: {
      screen: ToDoListsScreen
    },
    NewList: {
      screen: NewListScreen
    },
    ListDetails: {
      screen: ListDetailsScreen
    },
    Contacts: {
      screen: ContactsScreen
    }
  },
  {
    initialRouteName: "ToDoLists",
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.primaryColor
      },
      headerTintColor: "white"
    }
  }
);

const Navigation = SwitchNavigator(
  {
    Loading: LoadingScreen,
    App: AppNavigation,
    Auth: AuthNavigation
  },
  {
    initialRouteName: "Loading"
  }
);

export default Navigation;
