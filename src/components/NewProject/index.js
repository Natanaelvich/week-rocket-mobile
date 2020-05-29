import React, { useState } from 'react';

import Modal from 'react-native-modal';
import { useSelector, useDispatch } from 'react-redux';
import { Buttom, Input, Text, Container } from './styles';
import { closeNewProjectModal } from '~/store/modules/modals/actions';
import { createProjectsRequest } from '~/store/modules/projects/actions';

const NewProject = () => {
  const dispatch = useDispatch();

  const modalIsVisibility = useSelector(state => state.modals.newProjectModal);
  const [nameProject, setNameProject] = useState('');

  function handleSubmit() {
    dispatch(createProjectsRequest(nameProject));
  }

  return (
    <Modal isVisible={modalIsVisibility}>
      <Container>
        <Text>NOVO PROJETO</Text>
        <Input
          value={nameProject}
          onChangeText={text => setNameProject(text)}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          placeholder="nome do projeto"
        />
        <Buttom onPress={handleSubmit}>
          <Text>CRIAR</Text>
        </Buttom>
        <Buttom
          type="secundary"
          onPress={() => dispatch(closeNewProjectModal())}
        >
          <Text>CANCELAR</Text>
        </Buttom>
      </Container>
    </Modal>
  );
};

export default NewProject;
