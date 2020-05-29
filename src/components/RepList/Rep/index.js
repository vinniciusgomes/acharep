import React from "react";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

import {
  Container,
  RepItem,
  RepImage,
  RepContent,
  RepImageContent,
  RepNameContainer,
  RepName,
  RepAddress,
  RepExclusive,
  RepExclusiveText,
  RepType,
  RepInfoContainer,
  RepInfoName,
  RepInfoValue,
  RepInfoContent,
  TopSection,
  BottomSection,
  PriceContainer,
  PriceTitle,
  Price,
} from "./styles";

export default function Rep({
  image,
  name,
  address,
  exclusive,
  type,
  vacancies,
  gender,
  price,
  id,
  navigation,
}) {
  return (
    <Container onPress={navigation}>
      <RepItem>
        <RepImage
          source={{ uri: image }}
          imageStyle={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
        >
          <RepImageContent exclusive={exclusive}>
            {exclusive ? (
              <RepExclusive>
                <RepExclusiveText>Exclusivo</RepExclusiveText>
              </RepExclusive>
            ) : null}
            <RepNameContainer>
              <RepName numberOfLines={1}>{name}</RepName>
              <RepAddress numberOfLines={1}>{address}</RepAddress>
            </RepNameContainer>
          </RepImageContent>
        </RepImage>
        <RepContent>
          <TopSection>
            <RepType>{type}</RepType>
            <RepInfoContainer>
              <RepInfoContent>
                <Ionicons
                  name="ios-bed"
                  size={22}
                  color="#B0B5BC"
                  style={{ marginRight: 5 }}
                />
                <RepInfoName>
                  Vagas:{" "}
                  <RepInfoValue numberOfLines={1}>{vacancies}</RepInfoValue>
                </RepInfoName>
              </RepInfoContent>
              <RepInfoContent>
                <MaterialCommunityIcons
                  name="gender-male-female"
                  size={22}
                  color="#B0B5BC"
                  style={{ marginRight: 5, marginLeft: -2 }}
                />
                <RepInfoName>
                  Gênero:{" "}
                  <RepInfoValue numberOfLines={1}>{gender}</RepInfoValue>
                </RepInfoName>
              </RepInfoContent>
            </RepInfoContainer>
          </TopSection>
          <BottomSection>
            <PriceContainer>
              <PriceTitle>Valor aproximado:</PriceTitle>
              <Price>R${price}</Price>
            </PriceContainer>
          </BottomSection>
        </RepContent>
      </RepItem>
    </Container>
  );
}
