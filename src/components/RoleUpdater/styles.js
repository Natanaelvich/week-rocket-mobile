import styled from 'styled-components/native';

export const Container = styled.View`
  background: #4c3c82;
  padding: 12px 12px;
  border-radius: 12px;
`;
export const RoleItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const RoleItemText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;
export const Button = styled.TouchableOpacity`
  width: 80%;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  margin-top: 12px;
  height: 44px;
  align-self: center;
`;
export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
`;
export const Choose = styled.Switch.attrs({
  thumbColor: '#fff',
  trackColor: { false: '#7159c1', true: 'rgba(0,0,0,0.6)' },
})``;
