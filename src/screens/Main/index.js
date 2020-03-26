import React from "react";

import {
  Container,
  Header,
  Content,
  PageTitleContainer,
  Title,
  Subtitle,
  SearchContainer,
  Button,
  ButtonText,
  RepTypeContainer,
  RepTitleContainer,
  RepTypeListContainer,
  RepTypeItem
} from "./styles";
import { StatusBar } from "react-native";

export default function Main() {
  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <Header />
      <Content>
        <PageTitleContainer>
          <Title>Encontre a Rep perfeita</Title>
          <Subtitle center>
            Vamos te ajudar a encontrar o melhor lugar para você morar!
          </Subtitle>
        </PageTitleContainer>
        <SearchContainer />
        <Button>
          <ButtonText>Encontrar</ButtonText>
        </Button>
        <RepTypeContainer>
          <RepTitleContainer>
            <Title>Tipo de rep</Title>
            <Subtitle>Filtre o tipo de rep que você procura:</Subtitle>
          </RepTitleContainer>
          <RepTypeListContainer
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <RepTypeItem />
            <RepTypeItem />
            <RepTypeItem />
          </RepTypeListContainer>
        </RepTypeContainer>
      </Content>
    </Container>
  );
}
