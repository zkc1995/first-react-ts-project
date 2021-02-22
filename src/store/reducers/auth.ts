import { SET_TOKEN } from '../actions/actionTypes';
import type { RootAction } from '../actions/auth';

interface StateType {
  token: string
}

const initState = {
  token: localStorage.getItem('token') || ''
};

const authReducer = (state = initState, action: RootAction):StateType => {
  const { payload, type } = action;
  switch (type) {
  case SET_TOKEN:
    return { ...state, token: payload };
  default:
    return state;
  }
};

export default authReducer;