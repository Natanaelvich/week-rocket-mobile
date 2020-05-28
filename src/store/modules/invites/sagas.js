import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '~/services/api';
import { inviteMembersSuccess } from './actions';

function* inviteMembers({ invite }) {
  try {
    yield call(api.post, 'invites', {
      invites: [invite],
    });

    yield put(inviteMembersSuccess(invite));
  } catch (error) {}
}

export default all([
  takeLatest('@members/INVITE_MEMBERS_REQUEST', inviteMembers),
]);
