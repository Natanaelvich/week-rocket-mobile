import React, { useState, useEffect } from 'react';

import Modal from 'react-native-modal';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Button,
  ButtonText,
  Choose,
  RoleItem,
  RoleItemText,
} from './styles';
import api from '~/services/api';
import {
  closeRoleUpdaterModal,
  openRoleUpdaterModal,
} from '~/store/modules/modals/actions';
import { updateMembersRequest } from '~/store/modules/members/actions';

const RoleUpdater = () => {
  const dispatch = useDispatch();

  const isVisibleRoleUpdaterModal = useSelector(
    state => state.modals.roleUpdaterModal
  );

  const memberActive = useSelector(state => state.modals.memberActive);

  const [roles, setRoles] = useState([]);

  useEffect(() => {
    async function loadRoles() {
      const response = await api.get('roles');

      setRoles(response.data);
    }

    loadRoles();
  }, []);

  function handleRoleChange(value, role) {
    const newRoles = value
      ? [...memberActive.roles, role]
      : memberActive.roles.filter(member => member.id !== role.id);

    dispatch(updateMembersRequest(memberActive.id, newRoles));
    return value
      ? dispatch(
          openRoleUpdaterModal({
            ...memberActive,
            roles: [...memberActive.roles, role],
          })
        )
      : dispatch(
          openRoleUpdaterModal({
            ...memberActive,
            roles: memberActive.roles.filter(r => r.id !== role.id),
          })
        );
  }

  return (
    <Modal isVisible={isVisibleRoleUpdaterModal}>
      <Container>
        {roles &&
          roles.map(role => (
            <RoleItem key={role.id}>
              <RoleItemText>{role.name}</RoleItemText>
              <Choose
                value={
                  !!memberActive.roles.find(
                    memberRole => memberRole.id === role.id
                  )
                }
                onValueChange={value => handleRoleChange(value, role)}
              />
            </RoleItem>
          ))}
        <Button onPress={() => dispatch(closeRoleUpdaterModal())}>
          <ButtonText>Cancelar</ButtonText>
        </Button>
      </Container>
    </Modal>
  );
};

export default RoleUpdater;
