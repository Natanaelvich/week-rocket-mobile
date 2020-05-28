import { all } from 'redux-saga/effects';

import user, { initCheck } from './user/sagas';
import teams from './teams/sagas';
import projects from './projects/sagas';
import members from './members/sagas';
import invites from './invites/sagas';

export default function* rootSaga() {
  return yield all([initCheck(), user, teams, projects, members, invites]);
}
