import React, { useState } from "react";
import { StatusBar, Text } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import ReadMore from "react-native-read-more-text";

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
  AboutRepTitle,
  AboutRep,
  AboutRepContainer,
  HouseInfoContainer,
  HouseInfoItem,
  HouseInfoName,
  HouseInfoContent,
  HouseInfoTitle,
  ContactButtonContainer,
  ContactButton,
  ButtonText,
} from "./styles";

export default function RepInfo(props) {
  const { navigate } = props.navigation;

  const _renderTruncatedFooter = (handlePress) => {
    return (
      <Text style={{ color: "#222222", marginTop: 7 }} onPress={handlePress}>
        Ler mais...
      </Text>
    );
  };

  const _renderRevealedFooter = (handlePress) => {
    return (
      <Text style={{ color: "#222222", marginTop: 7 }} onPress={handlePress}>
        Ler menos...
      </Text>
    );
  };

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
        <AboutRepContainer>
          <AboutRepTitle>Sobre</AboutRepTitle>
          <ReadMore
            numberOfLines={5}
            renderTruncatedFooter={_renderTruncatedFooter}
            renderRevealedFooter={_renderRevealedFooter}
          >
            <AboutRep>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              auctor nunc massa, vel sagittis lorem finibus sed. Duis
              ullamcorper justo quis pharetra fringilla. Quisque in condimentum
              nibh. In ultricies turpis sit amet est bibendum, nec maximus enim
              ultrices. Vivamus posuere bibendum eros vitae cursus. Donec sit
              amet tellus dictum, porta urna quis, pharetra enim. Aenean ut
              magna ut quam sodales porttitor ut eu ligula. Quisque varius
              mauris non leo vestibulum porta.
            </AboutRep>
          </ReadMore>
        </AboutRepContainer>
        <HouseInfoContainer>
          <HouseInfoTitle>Informações da casa:</HouseInfoTitle>
          <HouseInfoItem>
            <FontAwesome
              name="bed"
              size="18"
              color="#222222"
              style={{ width: 22 }}
            />
            <HouseInfoName>Vagas:</HouseInfoName>
            <HouseInfoContent numberOfLines={1}>
              3 de 7 Pessoas
            </HouseInfoContent>
          </HouseInfoItem>
          <HouseInfoItem>
            <FontAwesome
              name="transgender"
              size="18"
              color="#222222"
              style={{ width: 22 }}
            />
            <HouseInfoName>Gênero:</HouseInfoName>
            <HouseInfoContent numberOfLines={1}>Feminina</HouseInfoContent>
          </HouseInfoItem>
          <HouseInfoItem>
            <FontAwesome
              name="home"
              size="18"
              color="#222222"
              style={{ width: 22 }}
            />
            <HouseInfoName>Cômodos:</HouseInfoName>
            <HouseInfoContent numberOfLines={1}>
              4 quartos, 3 banheiros, 1 sala e cozinha
            </HouseInfoContent>
          </HouseInfoItem>
          <HouseInfoItem>
            <FontAwesome
              name="wifi"
              size="18"
              color="#222222"
              style={{ width: 22 }}
            />
            <HouseInfoName>Wi-fi:</HouseInfoName>
            <HouseInfoContent numberOfLines={1}>300MB</HouseInfoContent>
          </HouseInfoItem>
        </HouseInfoContainer>
        <ContactButtonContainer>
          <ContactButton>
            <FontAwesome
              name="whatsapp"
              size="20"
              color="#ffffff"
              style={{ width: 22 }}
            />
            <ButtonText>Entrar em contato</ButtonText>
          </ContactButton>
        </ContactButtonContainer>
      </Content>
    </Container>
  );
}
