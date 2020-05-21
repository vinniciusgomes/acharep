import React, { useState, useEffect } from "react";
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
import api from "../../services/api";
import Loading from "../../components/loading";

function ListRep(props) {
  const [loading, setLoading] = useState(true);
  const [reps, setReps] = useState([]);
  const navigate = props.navigation.navigate;
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setLoading(true);
    requestReps();
  }, [refreshing]);

  useEffect(() => {
    requestReps();
  }, []);

  function requestReps() {
    return api
      .get("/rep")
      .then((res) => {
        const response = res.data;
        setReps(response);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }

  return (
    <Container>
      <StatusBar
        barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
      />
      {loading ? (
        <Loading />
      ) : (
        <>
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
              {reps.map((rep) => (
                <Rep
                  exclusive={rep.premium}
                  image={rep.fotos[0]}
                  name={rep.nome}
                  address={
                    rep.endereco.rua +
                    " " +
                    rep.endereco.numero +
                    ", " +
                    rep.endereco.bairro +
                    ", " +
                    rep.endereco.uf
                  }
                  type={rep.tipo}
                  vacancies={`${rep.vaga.livre} de ${rep.vaga.total} pessoas`}
                  gender={
                    rep.genero === "U"
                      ? "Unisex"
                      : rep.genero === "M"
                      ? "Masculina"
                      : "Feminina"
                  }
                  price={rep.preco}
                  id={rep._id}
                  navigate={navigate}
                />
              ))}
            </RepListContainer>
          </Content>
        </>
      )}
    </Container>
  );
}

export default ListRep;
