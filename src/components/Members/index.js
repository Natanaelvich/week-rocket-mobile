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

const Members = () => {
  const dispatch = useDispatch();

  const members = useSelector(state => state.members.data);

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

            <ButtonSettings>
              <Icon name="settings" size={16} color="#fff" />
            </ButtonSettings>
          </ListItem>
        )}
        ListFooterComponent={() => (
          <Button>
            <ButtonText>CONVIDAR</ButtonText>
          </Button>
        )}
      />
    </Container>
  );
};

export default Members;
