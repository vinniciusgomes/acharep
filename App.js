import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./src/store";
import Stack from "./src/router/Stack";

console.disableYellowBox = true;

export default function AchaRep() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <React.Fragment>
          <StatusBar barStyle="light-content" />
          <Stack />
        </React.Fragment>
      </PersistGate>
    </Provider>
  );
}
