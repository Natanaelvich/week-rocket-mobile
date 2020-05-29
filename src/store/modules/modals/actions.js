export const openNewTeamModal = () => ({
  type: '@user/OPEN_NEW_TEAM_MODAL',
});

export const closeNewTeamModal = () => ({
  type: '@user/CLOSE_NEW_TEAM_MODAL',
});

export const openNewProjectModal = () => ({
  type: '@user/OPEN_PROJECT_MODAL',
});

export const closeNewProjectModal = () => ({
  type: '@user/CLOSE_PROJECT_MODAL',
});

export const openNewInviteModal = () => ({
  type: '@user/OPEN_INVITE_MODAL',
});

export const closeNewInviteModal = () => ({
  type: '@user/CLOSE_INVITE_MODAL',
});

export const openRoleUpdaterModal = member => ({
  type: '@user/OPEN_ROLE_UPDATER_MODAL',
  member,
});

export const closeRoleUpdaterModal = () => ({
  type: '@user/CLOSE_ROLE_UPDATER_MODAL',
});
