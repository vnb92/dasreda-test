import { StateTypes } from '../../types/state';
import { ReducerTypes } from '../../types/reducers';

const defaultState: StateTypes.Repo[] = [];

export const repos: ReducerTypes.Repos = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
