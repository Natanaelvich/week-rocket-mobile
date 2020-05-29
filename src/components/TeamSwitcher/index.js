import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useSelector, useDispatch } from 'react-redux';
import { Container, TeamListItem, ItemAvatar, NewTeamButton } from './styles';
import { selectTeam } from '~/store/modules/teams/actions';
import { openNewTeamModal } from '~/store/modules/modals/actions';

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
                uri: `https://ui-avatars.com/api/?font-size=0.33&background=4C3C88&color=fff&name=${team.name}`,
              }}
            />
          </TeamListItem>
        ))}

      <NewTeamButton onPress={() => dispatch(openNewTeamModal())}>
        <Icon size={26} color="#fff" name="add" />
      </NewTeamButton>
    </Container>
  );
};

export default TeamSwitcher;
