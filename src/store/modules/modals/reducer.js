import produce from 'immer';

const initialState = {
  newTeamModal: false,
  newProjectModal: false,
  newInviteModal: false,
  roleUpdaterModal: false,
  memberActive: null,
};

export default (state = initialState, { type, member }) => {
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

    case '@user/OPEN_ROLE_UPDATER_MODAL':
      return produce(state, draft => {
        draft.roleUpdaterModal = true;
        draft.memberActive = member;
      });

    case '@user/CLOSE_ROLE_UPDATER_MODAL':
      return produce(state, draft => {
        draft.roleUpdaterModal = false;
      });

    default:
      return state;
  }
};
