import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";

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
  TitleContainer,
  RepTypeListContainer,
  RepTypeItem,
  LastRepsContainer,
  LastRepsItemContainer,
  LastRepItem,
  RepImage,
  RepContent,
  RepTypeIcon,
  RepTypeName
} from "./styles";
import Loading from "../../components/loading";

function Main(props) {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = props.navigation.navigate;

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(
  //     position => {
  //       const { latitude, longitude } = position.coords;
  //       setLatitude(latitude);
  //       setLongitude(longitude);
  //       setLoading(false);
  //     },
  //     err => {
  //       setLoading(false);
  //     },
  //     {
  //       timeout: 30000
  //     }
  //   );
  // }, []);

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <Content showsVerticalScrollIndicator={false}>
          <PageTitleContainer>
            <Title>Encontre a Rep perfeita</Title>
            <Subtitle center>
              Vamos te ajudar a encontrar o melhor lugar para você morar!
            </Subtitle>
          </PageTitleContainer>
          <SearchContainer />
          <Button onPress={() => navigate("ListRep")}>
            <ButtonText>Encontrar</ButtonText>
          </Button>
          <RepTypeContainer>
            <TitleContainer>
              <Title>Tipo de rep</Title>
              <Subtitle>Filtre o tipo de rep que você procura:</Subtitle>
            </TitleContainer>
            <RepTypeListContainer
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              <RepTypeItem first onPress={() => navigate("ListRep")}>
                <RepTypeIcon source={require("../../static/icons/woman.png")} />
                <RepTypeName>Só para mulheres</RepTypeName>
              </RepTypeItem>
              <RepTypeItem onPress={() => navigate("ListRep")}>
                <RepTypeIcon source={require("../../static/icons/house.png")} />
                <RepTypeName>Casa</RepTypeName>
              </RepTypeItem>
              <RepTypeItem last onPress={() => navigate("ListRep")}>
                <RepTypeIcon source={require("../../static/icons/apartament.png")} />
                <RepTypeName>Apartamento</RepTypeName>
              </RepTypeItem>
            </RepTypeListContainer>
          </RepTypeContainer>
          <LastRepsContainer>
            <TitleContainer>
              <Title>Últimas publicações </Title>
              <Subtitle>Estas são as últimas reps postadas:</Subtitle>
            </TitleContainer>
            <LastRepsItemContainer>
              <LastRepItem>
                <RepImage source={require("../../static/reps/1.jpg")} />
                <RepContent />
              </LastRepItem>
              <LastRepItem>
                <RepImage source={require("../../static/reps/2.jpg")} />
                <RepContent />
              </LastRepItem>
              <LastRepItem>
                <RepImage source={require("../../static/reps/3.jpg")} />
                <RepContent />
              </LastRepItem>
              <LastRepItem>
                <RepImage source={require("../../static/reps/4.jpg")} />
                <RepContent />
              </LastRepItem>
            </LastRepsItemContainer>
          </LastRepsContainer>
        </Content>
      )}
    </Container>
  );
}

export default Main;
