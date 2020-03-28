import styled from "styled-components";
import { Platform } from "react-native";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.SafeAreaView`
  width: 100%;
  background-color: #fff;
`;

export const Content = styled.ScrollView`
  flex: 1;
  padding: 0px 0px;
`;

export const PageTitleContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${Platform.OS === "ios"
    ? "30px 24px 0px 24px"
    : "45px 24px 0px 24px"};
`;

export const Title = styled.Text`
  font-size: ${Platform.OS === "ios" ? "26px" : "23px"};
  color: #24292e;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  font-size: ${Platform.OS === "ios" ? "16px" : "13px"};
  color: #959da5;
  text-align: ${props => (props.center ? "center" : "left")};
  width: 90%;
  margin-top: 5px;
`;

export const SearchContainer = styled.View`
  height: auto;
  border-color: #e1e4e8;
  border-width: 1px;
  border-radius: 5px;
  margin: 40px 24px 40px 24px;
`;

export const Button = styled.TouchableOpacity`
  height: ${Platform.OS === "ios" ? "50px" : "46px"};
  background-color: #ffb323;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 24px;
  margin-right: 24px;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 17px;
  font-weight: 700;
`;

export const RepTypeContainer = styled.View`
  margin-left: 24px;
`;

export const RepTypeIcon = styled.Image`
  width: 50px;
  height: 50px;
`;

export const RepTypeName = styled.Text`
  font-size: 14px;
  color: #222222;
  margin-top: 10px;
`;

export const TitleContainer = styled.View`
  width: 100%;
  margin-top: 40px;
  margin-right: 24px;
`;

export const RepTypeListContainer = styled.ScrollView`
  width: 100%;
`;

export const RepTypeItem = styled.TouchableOpacity`
  width: 150px;
  height: 110px;
  border-color: #e1e4e8;
  border-width: 1px;
  margin-top: 20px;
  border-radius: 5px;
  margin-left: ${props => (props.first ? "0px" : "20px")};
  margin-right: ${props => (props.last ? "24px" : "0px")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LastRepsContainer = styled.View`
  width: 100%;
  margin-left: 24px;
  padding-right: 28px;
  margin-bottom: 30px;
`;

export const LastRepsItemContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const FieldContainer = styled.View`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export const FieldTitleContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const FieldTitle = styled.Text`
  font-size: ${Platform.OS === "android" ? "16px" : "19px"};
  color: #24292e;
  font-weight: 700;
  margin-left: ${props => (props.ionicons ? "9px" : "5px")};
  margin-bottom: ${Platform.OS === "ios" ? "5px" : 0};
`;

export const FieldSeparator = styled.View`
  width: 100%;
  height: 1px;
  background-color: #e1e4e8;
`;

export const FieldBottomContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const FieldBottomItem = styled.View`
  width: 47.5%;
`;

export const FieldBottomSeparator = styled.View`
  height: 100%;
  width: 1px;
  background-color: #e1e4e8;
  margin-left: 2.5%;
  margin-right: 2.5%;
`;
