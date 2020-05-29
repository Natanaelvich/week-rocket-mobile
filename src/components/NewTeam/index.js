import React, { useState } from 'react';

import Modal from 'react-native-modal';
import { useSelector, useDispatch } from 'react-redux';
import { Buttom, Input, Text, Container } from './styles';
import { closeNewTeamModal } from '~/store/modules/modals/actions';
import { createTeamRequest } from '~/store/modules/teams/actions';

const NewTeam = () => {
  const dispatch = useDispatch();

  const modalIsVisibility = useSelector(state => state.modals.newTeamModal);
  const [nameTeam, setNameTeam] = useState('');

  function handleSubmit() {
    dispatch(createTeamRequest(nameTeam));
    setNameTeam('');
  }

  return (
    <Modal isVisible={modalIsVisibility}>
      <Container>
        <Text>NOVO TIME</Text>
        <Input
          value={nameTeam}
          onChangeText={text => setNameTeam(text)}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          placeholder="nome do time"
        />
        <Buttom onPress={handleSubmit}>
          <Text>CRIAR</Text>
        </Buttom>
        <Buttom type="secundary" onPress={() => dispatch(closeNewTeamModal())}>
          <Text>CANCELAR</Text>
        </Buttom>
      </Container>
    </Modal>
  );
};

export default NewTeam;
