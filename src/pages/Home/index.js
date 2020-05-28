import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useSelector } from 'react-redux';
import {
  Container,
  BackgrounWrapper,
  Header,
  Button,
  TeamTitle,
} from './styles';

export default function Home() {
  const activeTeam = useSelector(state => state.teams.active);

  return (
    <BackgrounWrapper>
      <Container>
        <Header>
          <Button>
            <Icon size={26} color="#fff" name="menu" />
          </Button>
          <TeamTitle>
            {activeTeam ? activeTeam.title : 'Selecione um time'}
          </TeamTitle>
          <Button>
            <Icon size={26} color="#fff" name="group" />
          </Button>
        </Header>
      </Container>
    </BackgrounWrapper>
  );
}
