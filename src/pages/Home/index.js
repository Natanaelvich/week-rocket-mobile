import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Sidemenu from 'react-native-side-menu';

import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  BackgrounWrapper,
  Header,
  Button,
  TeamTitle,
} from './styles';
import TeamSwitcher from '~/components/TeamSwitcher';
import { getTeamsRequest } from '~/store/modules/teams/actions';
import Projects from '~/components/Projects';
import Members from '~/components/Members';
import NewTeam from '~/components/NewTeam';

export default function Home() {
  const dispatch = useDispatch();

  const activeTeam = useSelector(state => state.teams.active);

  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);

  useEffect(() => {
    dispatch(getTeamsRequest());
  }, [dispatch]);

  function toggleMenu(position, isOpen) {
    if (position === 'left') {
      return setLeftOpen(isOpen);
    }

    return setRightOpen(isOpen);
  }

  return (
    <BackgrounWrapper>
      <Sidemenu
        isOpen={leftOpen}
        disableGestures
        onChange={isOpen => toggleMenu('left', isOpen)}
        openMenuOffset={70}
        menu={<TeamSwitcher />}
      >
        <Sidemenu
          isOpen={rightOpen}
          disableGestures
          onChange={isOpen => toggleMenu('right', isOpen)}
          openMenuOffset={285}
          menuPosition="right"
          menu={<Members />}
        >
          <Container>
            <Header>
              <Button onPress={() => toggleMenu('left', true)}>
                <Icon size={26} color="#fff" name="menu" />
              </Button>
              <TeamTitle>
                {activeTeam ? activeTeam.name : 'Selecione um time'}
              </TeamTitle>
              <Button onPress={() => toggleMenu('right', true)}>
                <Icon size={26} color="#fff" name="group" />
              </Button>
            </Header>

            <Projects />
          </Container>
        </Sidemenu>
      </Sidemenu>
      <NewTeam visible onRequestClose={() => {}} />
    </BackgrounWrapper>
  );
}
