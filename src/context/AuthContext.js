import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return ({ email, password }) => {
    // make an api request to sign up with email and password
    // if we sign up, modify state and say we are signed in
    // if we sign up fails, we need to report an error
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {};
};

const signout = (dispatch) => {
  return ({ email, password }) => {};
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { isSignedIn: false }
);
