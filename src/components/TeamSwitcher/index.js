import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useSelector, useDispatch } from 'react-redux';
import { Container, TeamListItem, ItemAvatar, NewTeam } from './styles';
import { selectTeam } from '~/store/modules/teams/actions';

const TeamSwitcher = () => {
  const dispatch = useDispatch();

  const teams = useSelector(state => state.teams.data);

  return (
    <Container>
      {teams &&
        teams.map(team => (
          <TeamListItem
            key={team.id}
            onPress={() => dispatch(selectTeam(team))}
          >
            <ItemAvatar
              source={{
                uri: `https://ui-avatars.com/api/?font-size=0.33&background=4C3C82&color=fff&name=${team.name}`,
              }}
            />
          </TeamListItem>
        ))}

      <NewTeam>
        <Icon size={26} color="#fff" name="add" />
      </NewTeam>
    </Container>
  );
};

export default TeamSwitcher;
