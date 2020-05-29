import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
`;
export const ProjectList = styled(FlatList)`
  margin-top: 12px;
`;
export const ListItem = styled.View`
  background: rgba(0, 0, 0, 0.2);
  width: 60%;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  border-radius: 12px;
  padding: 12px;
`;
export const ListItemTitle = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;
export const Button = styled.TouchableOpacity`
  background: rgba(0, 0, 0, 0.5);
  width: 40%;
  align-self: center;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: 12px;
  margin-bottom: 12px;
  elevation: 2;
`;
