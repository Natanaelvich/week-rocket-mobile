import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
`;
export const TeamList = styled(FlatList)`
  margin-top: 12px;
`;
export const TeamListItem = styled.TouchableOpacity`
  align-self: center;
  margin-bottom: 12px;
`;
export const ItemAvatar = styled.Image`
  height: 48px;
  width: 48px;
  border-radius: 12px;
`;
export const NewTeamButton = styled.TouchableOpacity`
  background: #4c3c82;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  align-self: center;
  border-radius: 12px;
`;
