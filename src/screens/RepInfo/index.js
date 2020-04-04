import React, { useState } from "react";
import { StatusBar } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { MaterialIcons } from "@expo/vector-icons";

import {
  Container,
  Header,
  BackButton,
  Content,
  RepNameContainer,
  RepName,
  Exclusive,
  ExclusiveText,
  Separator,
  RepInfoContainer,
  RepDescription,
  RepAddress,
  PriceInfoContainer,
  PriceInfoItem,
  PriceTotalTitle,
  PriceTotal,
} from "./styles";

export default function RepInfo(props) {
  const { navigate } = props.navigation;
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <SliderBox
        ImageComponentStyle={{ height: 300 }}
        imageLoadingColor="#ffb323"
        dotColor="#ffffff"
        images={[require("../../static/reps/1.jpg")]}
      />
      <Header>
        <BackButton onPress={() => navigate("ListRep")}>
          <MaterialIcons name="arrow-back" size={30} color="#FFFFFF" />
        </BackButton>
      </Header>
      <Content>
        <RepNameContainer>
          <RepName numberOfLines={1}>Pirâmides 64</RepName>
          <Exclusive>
            <ExclusiveText>Exclusivo</ExclusiveText>
          </Exclusive>
        </RepNameContainer>
        <Separator />
        <RepInfoContainer>
          <RepDescription numberOfLines={1}>
            Apartamento de 95m² para 4 pessoas
          </RepDescription>
          <RepAddress>Alameda Santos 2491, Jardins, São Paulo</RepAddress>
          <PriceInfoContainer>
            <PriceInfoItem bold>Aluguel</PriceInfoItem>
            <PriceInfoItem bold>R$ 1.300</PriceInfoItem>
          </PriceInfoContainer>
          <PriceInfoContainer>
            <PriceInfoItem>Condomínio</PriceInfoItem>
            <PriceInfoItem>R$ 200</PriceInfoItem>
          </PriceInfoContainer>
          <PriceInfoContainer>
            <PriceInfoItem>IPTU</PriceInfoItem>
            <PriceInfoItem>R$ 17</PriceInfoItem>
          </PriceInfoContainer>
          <Separator />
          <PriceInfoContainer>
            <PriceTotalTitle bold>Total</PriceTotalTitle>
            <PriceTotal>R$ 1.517</PriceTotal>
          </PriceInfoContainer>
          <Separator />
        </RepInfoContainer>
      </Content>
    </Container>
  );
}
