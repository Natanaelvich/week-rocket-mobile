import produce from 'immer';

const initialState = {
  newTeamModal: false,
};

export default (state = initialState, { type, token, rolesPermissions }) => {
  switch (type) {
    case '@user/OPEN_NEW_TEAM_MODAL':
      return produce(state, draft => {
        draft.newTeamModal = true;
      });
    case '@user/CLOSE_NEW_TEAM_MODAL':
      return produce(state, draft => {
        draft.newTeamModal = false;
      });

    default:
      return state;
  }
};
