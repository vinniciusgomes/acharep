import React, { useState, useEffect, useCallback } from "react";
import { StatusBar, Platform, View, RefreshControl } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import RNPickerSelect from "react-native-picker-select";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AsyncStorage from "@react-native-community/async-storage";

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
  RepTypeIcon,
  RepTypeName,
  FieldTitleContainer,
  FieldTitle,
  FieldContainer,
  FieldSeparator,
  FieldBottomContainer,
  FieldBottomItem,
  FieldBottomSeparator,
} from "./styles";
import Loading from "../../components/loading";
import Rep from "../../components/Main/Rep";
import api from "../../services/api";
import { Creators as FilterActions } from "../../store/ducks/filter";

function Main(props) {
  console.log(props);
  const [loading, setLoading] = useState(true);
  const [reps, setReps] = useState([]);
  const [city, setCity] = useState(null);
  const [roomShare, setRoomShare] = useState(null);
  const [repGender, setRepGender] = useState(null);
  const [repType, setRepType] = useState(null);
  const [valueRange, setValueRange] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const navigate = props.navigation.navigate;

  const onRefresh = useCallback(() => {
    setLoading(true);
    requestReps();
  }, [refreshing]);

  useEffect(() => {
    requestReps();
  }, []);

  function handleNavigate() {
    let filters = [];

    if (city) filters = [...filters, city];
    if (roomShare) filters = [...filters, roomShare];
    if (repGender) filters = [...filters, repGender];
    if (repType) filters = [...filters, repType];
    if (valueRange) filters = [...filters, valueRange];

    // AsyncStorage.setItem("filters", filters);

    navigate("ListRep", { filters: filters });
  }

  function requestReps() {
    return api
      .get("/rep?limite=4")
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
      <Header />
      {loading ? (
        <Loading />
      ) : (
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
          <PageTitleContainer>
            <Title>Encontre a Rep perfeita</Title>
            <Subtitle center>
              Vamos te ajudar a encontrar o melhor lugar para você morar!
            </Subtitle>
          </PageTitleContainer>
          <SearchContainer>
            <FieldContainer>
              <FieldTitleContainer>
                <MaterialIcons
                  name="location-on"
                  size={18}
                  color="#B0B5BC"
                  style={{ marginBottom: Platform.OS === "ios" ? 5 : 0 }}
                />
                <FieldTitle>Cidade</FieldTitle>
              </FieldTitleContainer>
              <RNPickerSelect
                placeholder={{
                  label: "Selecione...",
                  value: null,
                }}
                onValueChange={(value) => {
                  setCity(value);
                }}
                style={{
                  placeholder: {
                    color: "#656C72",
                  },
                }}
                useNativeAndroidPickerStyle={false}
                doneText="Selecionar"
                items={[
                  { label: "Lorena", value: "1" },
                  { label: "Guaratinguetá", value: "2" },
                  { label: "Cruzeiro", value: "3" },
                ]}
                Icon={() => {
                  return (
                    <View
                      style={{
                        backgroundColor: "transparent",
                      }}
                    />
                  );
                }}
              />
            </FieldContainer>
            <FieldSeparator />
            <FieldBottomContainer>
              <FieldBottomItem>
                <FieldContainer>
                  <FieldTitleContainer>
                    <Ionicons
                      name="ios-bed"
                      size={18}
                      color="#B0B5BC"
                      style={{ marginBottom: Platform.OS === "ios" ? 5 : 0 }}
                    />
                    <FieldTitle ionicons numberOfLines={1}>
                      Individual
                    </FieldTitle>
                  </FieldTitleContainer>
                  <RNPickerSelect
                    placeholder={{
                      label: "Selecione...",
                      value: null,
                    }}
                    onValueChange={(value) => {
                      setRoomShare(value);
                    }}
                    style={{
                      placeholder: {
                        color: "#656C72",
                      },
                    }}
                    useNativeAndroidPickerStyle={false}
                    doneText="Selecionar"
                    items={[
                      { label: "Sim", value: "Individual" },
                      { label: "Não", value: "Compartilhado" },
                    ]}
                    Icon={() => {
                      return (
                        <View
                          style={{
                            backgroundColor: "transparent",
                          }}
                        />
                      );
                    }}
                  />
                </FieldContainer>
              </FieldBottomItem>
              <FieldBottomSeparator />
              <FieldBottomItem>
                <FieldContainer>
                  <FieldTitleContainer>
                    <MaterialIcons
                      name="account-balance-wallet"
                      size={18}
                      color="#B0B5BC"
                      style={{ marginBottom: Platform.OS === "ios" ? 5 : 0 }}
                    />
                    <FieldTitle>Aluguel</FieldTitle>
                  </FieldTitleContainer>
                  <RNPickerSelect
                    placeholder={{
                      label: "Selecione...",
                      value: null,
                    }}
                    onValueChange={(value) => {
                      setValueRange(value);
                    }}
                    style={{
                      placeholder: {
                        color: "#656C72",
                      },
                    }}
                    useNativeAndroidPickerStyle={false}
                    doneText="Selecionar"
                    items={[
                      { label: "De R$100 até R$500", value: "100-500" },
                      { label: "De R$500 até R$900", value: "500-900" },
                      { label: "De R$900 até R$1.200", value: "900-1200" },
                    ]}
                    Icon={() => {
                      return (
                        <View
                          style={{
                            backgroundColor: "transparent",
                          }}
                        />
                      );
                    }}
                  />
                </FieldContainer>
              </FieldBottomItem>
            </FieldBottomContainer>
          </SearchContainer>
          <Button onPress={() => handleNavigate()}>
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
              <RepTypeItem first onPress={() => setRepGender("Feminina")}>
                <RepTypeIcon source={require("../../static/icons/woman.png")} />
                <RepTypeName>Só para mulheres</RepTypeName>
              </RepTypeItem>
              <RepTypeItem>
                <RepTypeIcon
                  onPress={() => setRepType("Casa")}
                  source={require("../../static/icons/house.png")}
                />
                <RepTypeName>Casa</RepTypeName>
              </RepTypeItem>
              <RepTypeItem last onPress={() => setRepType("Apartamento")}>
                <RepTypeIcon
                  source={require("../../static/icons/apartament.png")}
                />
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
            </LastRepsItemContainer>
          </LastRepsContainer>
        </Content>
      )}
    </Container>
  );
}

const mapStateToProps = (state) => ({
  filter: state.filterReducer.filter,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(FilterActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
