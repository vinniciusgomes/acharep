import React, { useState, useEffect, useCallback } from "react";
import { StatusBar, Platform, RefreshControl, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";

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
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();

  const filters = useSelector((state) => state.filters, []);

  const onRefresh = useCallback(() => {
    requestReps(filters);
    setLoading(true);
  }, [refreshing]);

  useEffect(() => {
    requestReps(filters);
  }, []);

  function handleNavigate(repInfo) {
    dispatch({ type: "REP_INFO", repInfo });
    navigate("RepInfo");
  }

  async function requestReps(filters) {
    console.log(filters);
    let city = true;
    let roomShare;
    let repGender;
    let repType;
    let valueRange;

    if (roomShare) roomShare = roomShare;
    if (repGender) repGender;
    if (repType) repType;
    if (valueRange) valueRange;

    let url = `/rep`;

    return api
      .get(url)
      .then((res) => {
        const response = res.data;
        console.log(response);
        setReps(response);
      })
      .catch((err) => Alert.alert("Ocorreu um erro!"))
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
              <CityName>{filters.city}</CityName>
            </CityContainer>
            <Separator />
            <RepListContainer>
              {reps.map((rep) => (
                <Rep
                  navigation={() => handleNavigate(rep)}
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
