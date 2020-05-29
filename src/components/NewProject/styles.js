import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  background: #4c3c82;
  padding: 12px 0;
  border-radius: 12px;
`;
export const Text = styled.Text`
  font-size: 16px;
  color: #fff;
`;
export const Input = styled.TextInput`
  width: 80%;
  height: 44px;
  padding-left: 12px;
  border-radius: 12px;
  background: #fff;
  margin-top: 16px;
`;
export const Buttom = styled.TouchableOpacity`
  width: 80%;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  margin-top: 12px;
  height: 44px;
  background: ${props =>
    props.type === 'secundary' ? 'transparent' : 'rgba(0, 0, 0, 0.3)'};
`;
