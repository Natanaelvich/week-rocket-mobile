import { combineReducers } from 'redux';

import { toastReducer as toast } from 'react-native-redux-toast';
import user from './user/reducer';
import teams from './teams/reducer';
import projects from './projects/reducer';
import members from './members/reducer';
import invites from './invites/reducer';
import modals from './modals/reducer';

export default combineReducers({
  user,
  teams,
  projects,
  members,
  invites,
  modals,
  toast,
});
