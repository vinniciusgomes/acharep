import { createSwitchNavigator, createAppContainer } from "react-navigation";

import MainScreen from "../screens/Main";

const AppNavigator = createSwitchNavigator(
  {
    Main: {
      screen: MainScreen
    }
  },
  {
    initialRouteName: "Main"
  }
);

export default createAppContainer(AppNavigator);
