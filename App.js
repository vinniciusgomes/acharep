import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";

import Stack from "./src/router/Stack";
import store from "./src/store";

console.disableYellowBox = true;

export default function AchaRep() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <StatusBar barStyle="light-content" />
        <Stack />
      </React.Fragment>
    </Provider>
  );
}
