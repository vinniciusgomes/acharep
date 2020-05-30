import { createSwitchNavigator, createAppContainer } from "react-navigation";

import MainScreen from "../screens/Main";
import ListRepScreen from "../screens/ListRep";
import RepInfoScreen from "../screens/RepInfo";

const AppNavigator = createSwitchNavigator(
  {
    Main: {
      screen: MainScreen
    },
    ListRep: {
      screen: ListRepScreen
    },
    RepInfo: {
      screen: RepInfoScreen
    }
  },
  {
    initialRouteName: "ListRep",
  }
);

export default createAppContainer(AppNavigator);
