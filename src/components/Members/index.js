import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  MembersList,
  ListItem,
  ListItemTitle,
  Button,
  Title,
  ButtonText,
  ButtonSettings,
} from './styles';
import { getMembersRequest } from '~/store/modules/members/actions';
import NewInvite from '../NewInvite';
import Can from '../Can';
import {
  openNewInviteModal,
  openRoleUpdaterModal,
} from '~/store/modules/modals/actions';
import RoleUpdater from '../RoleUpdater';

const Members = () => {
  const dispatch = useDispatch();

  const members = useSelector(state => state.members.data);
  const memberActive = useSelector(state => state.modals.memberActive);

  useEffect(() => {
    dispatch(getMembersRequest());
  }, [dispatch]);

  return (
    <Container>
      <Title>Membros</Title>
      <MembersList
        data={members}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <ListItem>
            <ListItemTitle>{item.user.name}</ListItemTitle>

            <Can checkRole="admnistrador">
              <ButtonSettings
                onPress={() => dispatch(openRoleUpdaterModal(item))}
              >
                <Icon name="settings" size={16} color="#fff" />
              </ButtonSettings>
            </Can>
          </ListItem>
        )}
        ListFooterComponent={() => (
          <Can checkPermission="invites_create">
            <Button onPress={() => dispatch(openNewInviteModal())}>
              <ButtonText>CONVIDAR</ButtonText>
            </Button>
          </Can>
        )}
      />

      <Can checkPermission="invites_create">
        <NewInvite />
      </Can>
      {memberActive && <RoleUpdater />}
    </Container>
  );
};

export default Members;
