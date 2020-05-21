import React, { useState, useEffect } from "react";
import { StatusBar, Platform, View, RefreshControl } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import RNPickerSelect from "react-native-picker-select";

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

function wait(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

function Main(props) {
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
                onValueChange={(value) => {}}
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
                    onValueChange={(value) => {}}
                    style={{
                      placeholder: {
                        color: "#656C72",
                      },
                    }}
                    useNativeAndroidPickerStyle={false}
                    doneText="Selecionar"
                    items={[
                      { label: "Sim", value: "yes" },
                      { label: "Não", value: "no" },
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
                    onValueChange={(value) => {}}
                    style={{
                      placeholder: {
                        color: "#656C72",
                      },
                    }}
                    useNativeAndroidPickerStyle={false}
                    doneText="Selecionar"
                    items={[
                      { label: "De R$100 até R$500", value: "1" },
                      { label: "De R$500 até R$900", value: "2" },
                      { label: "De R$900 até R$1.200", value: "3" },
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
              <RepTypeItem first>
                <RepTypeIcon source={require("../../static/icons/woman.png")} />
                <RepTypeName>Só para mulheres</RepTypeName>
              </RepTypeItem>
              <RepTypeItem>
                <RepTypeIcon source={require("../../static/icons/house.png")} />
                <RepTypeName>Casa</RepTypeName>
              </RepTypeItem>
              <RepTypeItem last>
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

export default Main;
