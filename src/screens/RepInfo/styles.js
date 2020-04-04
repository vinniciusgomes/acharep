import styled from "styled-components";
import { Platform } from "react-native";

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Header = styled.SafeAreaView`
  width: 100%;
  margin-top: -300px;
`;

export const BackButton = styled.TouchableOpacity`
  width: 100%;
  padding-left: 20px;
  margin-top: 5px;
`;

export const Content = styled.View`
  width: 100%;
  padding: 20px;
  margin-top: 215px;
`;

export const RepNameContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RepName = styled.Text`
  font-size: 23px;
  color: #222222;
  font-weight: bold;
`;

export const Exclusive = styled.View`
  width: 85px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #92174d;
  border-radius: 2px;
`;

export const ExclusiveText = styled.Text`
  font-size: 13px;
  color: #fff;
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background-color: #f2f2f2;
  margin-top: 15px;
`;

export const RepInfoContainer = styled.View`
  width: 100%;
  margin-top: 20px;
`;

export const RepDescription = styled.Text`
  width: 100%;
  font-size: 20px;
  color: #222222;
`;

export const RepAddress = styled.Text`
  width: 100%;
  font-size: 16px;
  color: rgba(34, 34, 34, 0.56);
  margin-top: 5px;
  margin-bottom: 25px;
`;

export const PriceInfoContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
`;

export const PriceInfoItem = styled.Text`
  font-size: 16px;
  color: ${(props) => (props.bold ? "#000" : "rgba(34, 34, 34, 0.56)")};
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
`;

export const PriceTotalTitle = styled.Text`
  font-size: 17px;
  color: #222222;
  font-weight: bold;
  margin-top: 10px;
`;

export const PriceTotal = styled.Text`
  font-size: 17px;
  color: #13c081;
  font-weight: bold;
  margin-top: 10px;
`;

export const AboutRepTitle = styled.Text`
  font-size: 17px;
  color: #222222;
  font-weight: bold;
  margin-top: 10px;
`;
