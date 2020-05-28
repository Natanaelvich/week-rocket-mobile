import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px 10px 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: 24px;
  color: #7159c1;
  font-weight: bold;
`;
export const Button = styled.TouchableOpacity`
  background: #7159c1;
  padding: 12px;
  border-radius: 10px;
  elevation: 12;
`;
export const ButtonText = styled.Text`
  font-size: 12px;
  color: #fff;
`;
