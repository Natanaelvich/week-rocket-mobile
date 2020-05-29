import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
`;
export const Title = styled.Text`
  font-size: 26px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 12px;
`;
export const MembersList = styled(FlatList)`
  margin-top: 12px;
`;
export const ListItem = styled.View`
  flex-direction: row;
  background: rgba(0, 0, 0, 0.2);
  width: 60%;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  border-radius: 12px;
  padding: 6px 12px;
`;
export const ListItemTitle = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;
export const ButtonSettings = styled.TouchableOpacity.attrs({
  hitSlop: { top: 5, bottom: 5, left: 5, right: 5 },
})`
  background: rgba(0, 0, 0, 0.5);
  align-self: center;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  padding: 12px;
`;
export const Button = styled.TouchableOpacity.attrs({
  hitSlop: { top: 5, bottom: 5, left: 5, right: 5 },
})`
  background: rgba(0, 0, 0, 0.5);
  width: 60%;
  align-self: center;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: 12px;
  margin-top: 12px;
`;
export const ButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;
