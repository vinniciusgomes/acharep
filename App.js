import React from "react";
import { StatusBar } from "react-native";

import Stack from "./src/router/Stack";

export default function acharepi() {
  return (
    <React.Fragment>
      <StatusBar barStyle="light-content" />
      <Stack />
    </React.Fragment>
  );
}
