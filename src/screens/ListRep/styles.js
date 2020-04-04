import styled from "styled-components";
import { Platform } from "react-native";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.SafeAreaView`
  width: 100%;
  background-color: #fff;
`;

export const TitleContainer = styled.View`
  display: flex;
  margin-left: 24px;
  margin-top: 15px;
`;

export const Content = styled.ScrollView`
  flex: 1;
  padding: 0px 0px;
`;

export const Title = styled.Text`
  font-size: ${Platform.OS === "ios" ? "26px" : "23px"};
  color: #24292e;
  font-weight: bold;
`;

export const BackButton = styled.TouchableOpacity`
  width: 100%;
  padding-left: 20px;
  margin-top: 5px;
`;

export const CityContainer = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 10px 24px;
`;

export const CityName = styled.Text`
  font-weight: 300;
  color: #4f4f4f;
  font-size: 17px;
  margin-top: -5px;
  margin-left: 10px;
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background-color: #f2f2f2;
  margin-top: 15px;
`;

export const RepListContainer = styled.View`
  padding: 15px 24px;
`;
