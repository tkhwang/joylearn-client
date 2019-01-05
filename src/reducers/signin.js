import { handleActions } from 'redux-actions';
import { SIGNIN, SIGNOUT } from '../actions/signin';

const initialState = {
  isSignin: false
};

export default handleActions(
  {
    [SIGNIN]: (state, action) => {
      return {
        ...state,
        isSignin: true
      };
    },
    [SIGNOUT]: (state, action) => {
      return { ...state, isSignin: false };
    }
  },
  initialState
);
