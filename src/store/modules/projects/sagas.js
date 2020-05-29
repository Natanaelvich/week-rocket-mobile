import { call, put, all, takeLatest } from 'redux-saga/effects';
import { getProjectsSuccess, createProjectsSuccess } from './actions';
import api from '~/services/api';
import { closeNewProjectModal } from '../modals/actions';

function* getProjects() {
  const response = yield call(api.get, 'projects');

  yield put(getProjectsSuccess(response.data));
}

function* createProjects({ titleProject }) {
  try {
    const response = yield call(api.post, 'projects', {
      title: titleProject,
    });

    yield put(createProjectsSuccess(response.data));
    yield put(closeNewProjectModal());
  } catch (error) {}
}

export default all([
  takeLatest('@projects/GET_PROJECTS_REQUEST', getProjects),
  takeLatest('@projects/CREATE_PROJECTS_REQUEST', createProjects),
]);
