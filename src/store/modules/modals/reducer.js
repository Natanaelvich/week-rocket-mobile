import produce from 'immer';

const initialState = {
  newTeamModal: false,
  newProjectModal: false,
  newInviteModal: false,
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

    case '@user/OPEN_PROJECT_MODAL':
      return produce(state, draft => {
        draft.newProjectModal = true;
      });

    case '@user/CLOSE_PROJECT_MODAL':
      return produce(state, draft => {
        draft.newProjectModal = false;
      });

    case '@user/OPEN_INVITE_MODAL':
      return produce(state, draft => {
        draft.newInviteModal = true;
      });

    case '@user/CLOSE_INVITE_MODAL':
      return produce(state, draft => {
        draft.newInviteModal = false;
      });

    default:
      return state;
  }
};
