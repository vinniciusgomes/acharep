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
  padding: 0px 0px;
`;

export const PageTitleContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 24px 0px 24px;
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
  height: 150px;
  border-color: #e1e4e8;
  border-width: 1px;
  padding: 15px;
  border-radius: 5px;
  margin: 40px 24px 40px 24px;
`;

export const Button = styled.TouchableOpacity`
  height: 50px;
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
  padding: 0px 24px;
  margin-bottom: 30px;
`;

export const LastRepsItemContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const LastRepItem = styled.TouchableOpacity`
  width: 48%;
  margin-top: 20px;
`;

export const RepImage = styled.Image`
  width: 100%;
  height: 110px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const RepContent = styled.View`
  width: 100%;
  height: 110px;
  border-color: #e1e4e8;
  border-width: 1px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;
