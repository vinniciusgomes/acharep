import styled from "styled-components";

export const Container = styled.View`
  width: 50%;
`;

export const RepItem = styled.TouchableOpacity`
  width: 90%;
  margin-top: 20px;
`;

export const RepImage = styled.ImageBackground`
  width: 100%;
  height: 110px;
`;

export const RepImageContent = styled.View`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.35);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  justify-content: ${props => (props.exclusive ? "space-between" : "flex-end")};
  padding: 10px;
`;

export const RepContent = styled.View`
  width: 100%;
  height: 110px;
  border-bottom-color: #e1e4e8;
  border-left-color: #e1e4e8;
  border-right-color: #e1e4e8;
  border-top-color: transparent;
  border-width: 1px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 10px;
  justify-content: space-between;
`;

export const RepNameContainer = styled.View`
  width: 100%;
`;

export const RepName = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #fff;
`;

export const RepAddress = styled.Text`
  font-size: 10px;
  color: #fff;
`;

export const RepExclusive = styled.View`
  width: 50px;
  height: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #92174d;
  border-radius: 2px;
`;

export const RepExclusiveText = styled.Text`
  font-size: 8px;
  color: #fff;
`;

export const RepType = styled.Text`
  color: #2d8fbb;
  font-size: 10px;
`;

export const RepInfoContainer = styled.View`
  width: 100%;
  margin-top: 10px;
`;

export const RepInfoContent = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
`;

export const RepInfoName = styled.Text`
  width: 100%;
  color: #4f4f4f;
  font-size: 11px;
  margin-right: 5px;
  margin-bottom: 2px;
`;

export const RepInfoValue = styled.Text`
  color: #222222;
  font-weight: 700;
`;

export const TopSection = styled.View``;

export const BottomSection = styled.View``;

export const PriceContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top-width: 0.5;
  border-top-color: #e1e4e8;
  padding-top: 10px;

`;

export const PriceTitle = styled.Text`
  font-size: 12px;
  color: #4f4f4f;
`;

export const Price = styled.Text`
  font-size: 12px;
  color: #000;
  font-weight: bold;
`;
