import styled from "styled-components";

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

export const AboutRepContainer = styled.View`
  width: 100%;
`;

export const AboutRepTitle = styled.Text`
  font-size: 17px;
  color: #222222;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 5px;
`;

export const AboutRep = styled.Text`
  font-size: 17px;
  color: #707070;
  padding-top: 7px;
  text-align: justify;
`;

export const HouseInfoContainer = styled.View`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const HouseInfoItem = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
  width: 100%;
`;

export const HouseInfoName = styled.Text`
  font-size: 17px;
  color: #4f4f4f;
  font-weight: 300;
  margin-left: 10px;
  margin-right: 10px;
`;

export const HouseInfoContent = styled.Text`
  font-size: 17px;
  color: #222222;
  font-weight: 600;
  width: 70%;
`;

export const HouseInfoTitle = styled.Text`
  font-size: 17px;
  color: #222222;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const ContactButtonContainer = styled.View`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const ContactButton = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: #ffb323;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 17px;
  font-weight: bold;
  margin-left: 5px;
`;
