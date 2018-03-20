import { StackNavigator } from "react-navigation";

import InitalScreen from "./screens/Initial/InitalScreen";
import LoginScreen from "./screens/Login/LoginScreen";
import RegisterScreen from "./screens/Register/RegisterScreen";

const RootStack = StackNavigator({
  Home: {
    screen: InitalScreen
  },
  Login: {
    screen: LoginScreen
  },
  Register: {
    screen: RegisterScreen
  }
});

export default RootStack;
