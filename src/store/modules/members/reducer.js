import produce from 'immer';

const initialState = {
  data: [],
};

export default (state = initialState, { type, members, member, update }) => {
  switch (type) {
    case '@members/GET_MEMBERS_SUCCESS':
      return produce(state, draft => {
        draft.data = [...members];
      });

    case '@members/CREATE_MEMBER_REQUEST':
      return produce(state, draft => {
        draft.data.push(member);
      });

    case '@members/UPDATE_MEMBERS_REQUEST':
      return produce(state, draft => {
        draft.data = draft.data.map(memberUpdate =>
          memberUpdate.id === update.id
            ? { ...memberUpdate, roles: update.roles }
            : memberUpdate
        );
      });

    default:
      return state;
  }
};
