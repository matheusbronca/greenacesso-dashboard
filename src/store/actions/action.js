export const getUsersData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://api.github.com/users`);
      const users = await response.json();

      dispatch({
        type: 'LOAD_USERS_SUCCESS',
        payload: {
          users,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
