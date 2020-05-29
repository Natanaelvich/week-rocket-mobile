import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import { ToastActionsCreators } from 'react-native-redux-toast';
import {
  signInSuccess,
  signUpSuccess,
  getPermissionsSuccess,
  initCheckSuccess,
} from './actions';
import api from '~/services/api';
import NavigationService from '~/services/navigation';
import { selectTeam } from '../teams/actions';

export function* initCheck() {
  const token = yield call([AsyncStorage, 'getItem'], '@week:token');
  const team = yield call([AsyncStorage, 'getItem'], '@week:team');

  if (token) {
    yield put(signInSuccess(token));
  }

  if (team) {
    yield put(selectTeam(JSON.parse(team)));
  }

  yield put(initCheckSuccess());
}

function* signIn({ payload }) {
  try {
    NavigationService.navigate('Home');
    const response = yield call(api.post, 'sessions', {
      email: payload.email,
      password: payload.password,
    });

    yield call([AsyncStorage, 'setItem'], '@week:token', response.data.token);
    yield put(signInSuccess(response.data.token));
  } catch (error) {
    yield put(
      ToastActionsCreators.displayWarning(
        'erro no login, verifique email ou senha'
      )
    );
  }
}

function* signUp({ payload }) {
  try {
    const response = yield call(api.post, 'users', {
      name: payload.name,
      email: payload.email,
      password: payload.password,
    });

    yield call([AsyncStorage, 'setItem'], '@week:token', response.data);
    yield put(signUpSuccess(response.data.token));
  } catch (error) {
    yield put(
      ToastActionsCreators.displayWarning(
        'erro no cadastro, verifique em seu email se existe convite para algum time'
      )
    );
  }
}

function* getPermissions() {
  try {
    const team = yield select(state => state.teams.active);
    const signedIn = yield select(state => state.user.signedIn);

    if (!signedIn || !team) {
      return;
    }

    const response = yield call(api.get, 'permissions');

    const { roles, permissions } = response.data;

    yield put(getPermissionsSuccess(roles, permissions));
  } catch (error) {
    yield put(ToastActionsCreators.displayWarning('erro ao buscar permissões'));
  }
}

export default all([
  takeLatest('@user/SIGN_IN_REQUEST', signIn),
  takeLatest('@user/SIGN_UP_REQUEST', signUp),
  takeLatest('@user/GET_PERMISSIONS_REQUEST', getPermissions),
  takeLatest('@teams/SELECT_TEAM', getPermissions),
]);
