import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useSelector } from 'react-redux';
import {
  Container,
  TeamList,
  TeamListItem,
  ItemAvatar,
  NewTeam,
} from './styles';

const TeamSwitcher = () => {
  const teams = useSelector(state => state.teams.data);

  return (
    <Container>
      <TeamList
        data={teams}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <TeamListItem>
            <ItemAvatar
              source={{
                uri: `https://ui-avatars.com/api/?font-size=0.33&background=4C3C82&color=fff&name=${item.name}`,
              }}
            />
          </TeamListItem>
        )}
      />

      <NewTeam>
        <Icon size={26} color="#fff" name="add" />
      </NewTeam>
    </Container>
  );
};

export default TeamSwitcher;
