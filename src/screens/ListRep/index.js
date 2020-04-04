import React, { useState } from "react";
import { StatusBar, Platform, RefreshControl } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import {
  Container,
  Header,
  Content,
  TitleContainer,
  Title,
  BackButton,
  CityContainer,
  CityName,
  Separator,
  RepListContainer,
} from "./styles";
import Rep from "../../components/RepList/Rep";

function wait(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

function ListRep(props) {
  const [loading, setLoading] = useState(false);
  const navigate = props.navigation.navigate;
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);
  return (
    <Container>
      <StatusBar
        barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
      />
      <Header>
        <BackButton onPress={() => navigate("Main")}>
          <MaterialIcons
            name="arrow-back"
            size={30}
            color="#1D1D1D"
            style={{ marginBottom: Platform.OS === "ios" ? 5 : 0 }}
          />
        </BackButton>
      </Header>
      <Content
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            tintColor="#ffb323"
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <TitleContainer>
          <Title>Encontramos para você:</Title>
        </TitleContainer>
        <CityContainer>
          <MaterialIcons
            name="location-on"
            size={20}
            color="#B0B5BC"
            style={{
              marginBottom: Platform.OS === "ios" ? 5 : 0,
              marginLeft: -2,
            }}
          />
          <CityName>Lorena, São Paulo</CityName>
        </CityContainer>
        <Separator />
        <RepListContainer>
          <Rep
            exclusive
            image={require("../../static/reps/1.jpg")}
            name="Pirâmides 64"
            address="Alameda Santos 2491, Jardins, São Paulo"
            type="Apartamento"
            vacancies="3 de 7 pessoas"
            gender="Feminina"
            price={1.517}
            id={123}
            navigate={navigate}
          />
          <Rep
            image={require("../../static/reps/2.jpg")}
            name="Pirâmides 64"
            address="Alameda Santos 2491, Jardins, São Paulo"
            type="Apartamento"
            vacancies="3 de 7 pessoas"
            gender="Feminina"
            price={1.517}
            id={123}
            navigate={navigate}
          />
          <Rep
            image={require("../../static/reps/3.jpg")}
            name="Pirâmides 64"
            address="Alameda Santos 2491, Jardins, São Paulo"
            type="Apartamento"
            vacancies="3 de 7 pessoas"
            gender="Feminina"
            price={1.517}
            id={123}
            navigate={navigate}
          />
        </RepListContainer>
      </Content>
    </Container>
  );
}

export default ListRep;
