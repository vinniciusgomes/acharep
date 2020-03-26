import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.SafeAreaView`
  width: 100%;
  background-color: #fff;
`;

export const Content = styled.ScrollView`
  flex: 1;
  padding: 0px 24px;
`;

export const PageTitleContainer = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const Title = styled.Text`
  font-size: 26px;
  color: #24292e;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  color: #959da5;
  text-align: ${props => (props.center ? "center" : "left")};
  width: 90%;
  margin-top: 5px;
`;

export const SearchContainer = styled.View`
  width: 100%;
  height: 150px;
  border-color: #e1e4e8;
  border-width: 1px;
  padding: 15px;
  margin-top: 40px;
  margin-bottom: 40px;
  border-radius: 5px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: #ffb323;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 17px;
  font-weight: 700;
`;

export const RepTypeContainer = styled.View`
  width: 100%;
`;

export const RepTitleContainer = styled.View`
  width: 100%;
  margin-top: 40px;
`;

export const RepTypeListContainer = styled.ScrollView`
  width: 100%;
`;

export const RepTypeItem = styled.View`
  width: 140px;
  height: 110px;
  border-color: #e1e4e8;
  border-width: 1px;
  padding: 15px;
  margin-top: 20px;
  border-radius: 5px;
  margin-right: 30px;
`;
