import React, { useState } from 'react';

import Modal from 'react-native-modal';
import { useSelector, useDispatch } from 'react-redux';
import { Buttom, Input, Text, Container } from './styles';
import { closeNewTeamModal } from '~/store/modules/modals/actions';

const NewTeam = () => {
  const dispatch = useDispatch();

  const modalIsVisibility = useSelector(state => state.modals.newTeamModal);
  const [newTem, setNewTeam] = useState('');

  function handleSubmit() {}

  return (
    <Modal isVisible={modalIsVisibility}>
      <Container>
        <Text>NOVO TIME</Text>
        <Input
          value={newTem}
          onChangeText={text => setNewTeam(text)}
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
