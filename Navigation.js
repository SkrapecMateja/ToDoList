import { StackNavigator } from "react-navigation";

import InitalScreen from "./screens/Initial/InitalScreen";
import LoginScreen from "./screens/Login/LoginScreen";
import RegisterScreen from "./screens/Register/RegisterScreen";
import colors from "./constants/colors";

const RootStack = StackNavigator(
  {
    Home: {
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
    initialRouteName: "Home",
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.primaryColor
      },
      headerTintColor: "white"
    }
  }
);

export default RootStack;
