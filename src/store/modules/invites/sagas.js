import { call, put, all, takeLatest } from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';
import api from '~/services/api';
import { inviteMembersSuccess } from './actions';
import { closeNewInviteModal } from '../modals/actions';

function* inviteMembers({ invite }) {
  try {
    yield call(api.post, 'invites', {
      invites: [invite],
    });

    yield put(inviteMembersSuccess(invite));
    yield put(closeNewInviteModal());
    yield put(ToastActionsCreators.displayInfo('convite enviado'));
  } catch (error) {
    yield put(
      ToastActionsCreators.displayError('erro ao enviar convite enviado')
    );
  }
}

export default all([
  takeLatest('@members/INVITE_MEMBERS_REQUEST', inviteMembers),
]);
