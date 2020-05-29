import React from "react";
import { StatusBar } from "react-native";

import Stack from "./src/router/Stack";

console.disableYellowBox = true;

export default function AchaRep() {
  return (
    <React.Fragment>
      <StatusBar barStyle="light-content" />
      <Stack />
    </React.Fragment>
  );
}
