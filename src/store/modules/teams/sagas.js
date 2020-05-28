import { call, put, all, takeLatest } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import { getTeamsSuccess, createTeamSuccess, closeTeamModal } from './actions';
import api from '~/services/api';

function* getTeams() {
  try {
    const response = yield call(api.get, 'teams');

    yield put(getTeamsSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

function* createTeam({ nameTeam }) {
  try {
    const response = yield call(api.post, 'teams', {
      name: nameTeam,
    });

    yield put(createTeamSuccess(response.data));
    yield put(closeTeamModal());
  } catch (error) {}
}

function* setTeam({ team }) {
  yield call([AsyncStorage, 'setItem'], '@week:team', JSON.stringify(team));
}

export default all([
  takeLatest('@teams/GET_TEAMS_REQUEST', getTeams),
  takeLatest('@teams/CREATE_TEAM_REQUEST', createTeam),
  takeLatest('@teams/SELECT_TEAM', setTeam),
]);
