import { createActions } from 'redux-actions';

export const SIGNIN = 'sign/SIGNIN';
export const SIGNOUT = 'sign/SIGNOUT';

// export const signin = createActions(SIGNIN);
// export const signout = createActions(SIGNOUT);

export const signin = name => {
  return {
    type: SIGNIN,
    payload: {
      name: name
    }
  };
};

export const signout = name => {
  return {
    type: SIGNOUT,
    payload: {
      name: name
    }
  };
};
