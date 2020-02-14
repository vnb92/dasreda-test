import { Reducer } from 'redux';
import { TState } from '../../types';

const defaultState = {
  repos: [],
};

// TODO: Убрать any
export const reducer: Reducer<TState, any> = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
