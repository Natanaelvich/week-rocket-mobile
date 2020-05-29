import React, { useState } from 'react';

import Modal from 'react-native-modal';
import { useSelector, useDispatch } from 'react-redux';
import { Buttom, Input, Text, Container } from './styles';
import { closeNewInviteModal } from '~/store/modules/modals/actions';
import { inviteMembersRequest } from '~/store/modules/invites/actions';

const NewInvite = () => {
  const dispatch = useDispatch();

  const modalIsVisibility = useSelector(state => state.modals.newInviteModal);
  const [email, setEmail] = useState('');

  function handleSubmit() {
    dispatch(inviteMembersRequest(email));
  }

  return (
    <Modal isVisible={modalIsVisibility}>
      <Container>
        <Text>CONVIDAR NOVO MEMBRO</Text>
        <Input
          value={email}
          onChangeText={text => setEmail(text)}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          placeholder="email da pessoa que deseja convidar"
        />
        <Buttom onPress={handleSubmit}>
          <Text>CONVIDAR</Text>
        </Buttom>
        <Buttom
          type="secundary"
          onPress={() => dispatch(closeNewInviteModal())}
        >
          <Text>CANCELAR</Text>
        </Buttom>
      </Container>
    </Modal>
  );
};

export default NewInvite;
