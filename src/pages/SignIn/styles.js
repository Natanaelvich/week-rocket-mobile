import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;
export const Title = styled.Text`
  font-size: 26px;
  color: #7159c1;
  font-weight: bold;
`;
export const Input = styled.TextInput`
  width: 80%;
  height: 44px;
  padding-left: 12px;
  border: 1px solid #7159c1;
  border-radius: 12px;
  margin-bottom: 12px;
`;
export const Button = styled.TouchableOpacity`
  background: #7159c1;
  width: 80%;
  height: 44px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
`;
export const ButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
`;
