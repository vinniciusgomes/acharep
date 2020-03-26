import React from "react";
import { StatusBar, ActivityIndicator } from "react-native";

import { Container, LoadingContainer } from "./styles";

export default function loading() {
  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <LoadingContainer>
        <ActivityIndicator size="large" color="#FFB323" />
      </LoadingContainer>
    </Container>
  );
}
