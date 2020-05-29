import { call, put, all, takeLatest } from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';
import { createMemberSuccess, getMembersSuccess } from './actions';
import api from '~/services/api';

function* getMembers() {
  try {
    const response = yield call(api.get, 'members');

    yield put(getMembersSuccess(response.data));
  } catch (error) {
    yield put(ToastActionsCreators.displayError('erro ao buscar membros'));
  }
}

function* createMember({ emailInvite }) {
  try {
    const response = yield call(api.post, 'members', {
      email: emailInvite,
    });

    yield put(createMemberSuccess(response.data));
  } catch (error) {
    yield put(ToastActionsCreators.displayError('erro ao criar membro'));
  }
}

function* updateMember({ update }) {
  try {
    console.log(update.roles.map(role => role.id));
    console.log(update.id);
    yield call(api.put, `members/${update.id}`, {
      roles: update.roles.map(role => role.id),
    });
    yield put(ToastActionsCreators.displayInfo('mebro atualizado'));
  } catch (error) {
    yield put(ToastActionsCreators.displayError('erro ao alterar permissão'));
  }
}

export default all([
  takeLatest('@members/GET_MEMBERS_REQUEST', getMembers),
  takeLatest('@members/CREATE_MEMBER_REQUEST', createMember),
  takeLatest('@members/UPDATE_MEMBERS_REQUEST', updateMember),
]);
