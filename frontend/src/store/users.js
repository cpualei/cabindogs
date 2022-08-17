import { csrfFetch } from "./csrf";

// ACTIONS
export const LOAD_USERS = "cabins/LOAD_USERS";

// ACTION CREATORS
const load = (users) => {
  return {
    type: LOAD_USERS,
    users,
  };
};

// ------- THUNK ACTION CREATORS -------
export const getUsers = () => async (dispatch) => {
  const res = await csrfFetch(`/api/users/`);
  if (res.ok) {
    const users = await res.json();
    dispatch(load(users));
  }
};

// ------- REDUCER -------
const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_USERS:
      const normalizedUsers = { };
      action.users.forEach((user) => {
        normalizedUsers[user.id] = user;
      });
      return { ...normalizedUsers };
    default:
        return state;
  }
};

export default usersReducer;
