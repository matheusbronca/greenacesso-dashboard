const GitReducer = (state = [], action) => {
  if (action.type === 'LOAD_USERS_SUCCESS') {
    return action.payload.users;
  }

  return state;
};

export default GitReducer;
