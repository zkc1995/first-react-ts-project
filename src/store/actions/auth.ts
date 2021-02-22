import { SET_TOKEN } from './actionTypes';

export interface RootAction {
  type: string,
  payload: any
}

export const setTokenAction = (token: string): RootAction => ({type: SET_TOKEN, payload: token});

