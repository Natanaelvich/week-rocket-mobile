import { call, put, all, takeLatest } from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';
import { getProjectsSuccess, createProjectsSuccess } from './actions';
import api from '~/services/api';
import { closeNewProjectModal } from '../modals/actions';

function* getProjects() {
  try {
    const response = yield call(api.get, 'projects');

    yield put(getProjectsSuccess(response.data));
  } catch (error) {
    yield put(ToastActionsCreators.displayWarning('erro ao buscar projetos'));
  }
}

function* createProjects({ titleProject }) {
  try {
    const response = yield call(api.post, 'projects', {
      title: titleProject,
    });

    yield put(createProjectsSuccess(response.data));
    yield put(closeNewProjectModal());
    yield put(ToastActionsCreators.displayInfo('novo projeto criado'));
  } catch (error) {
    yield put(closeNewProjectModal());
    yield put(
      ToastActionsCreators.displayWarning('erro ao criar novo projeto')
    );
  }
}

export default all([
  takeLatest('@projects/GET_PROJECTS_REQUEST', getProjects),
  takeLatest('@projects/CREATE_PROJECTS_REQUEST', createProjects),
]);
