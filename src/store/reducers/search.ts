import { StateTypes } from '../../types/state';
import { ReducerTypes } from '../../types/reducers';

const defaultState: StateTypes.Search = '';

export const search: ReducerTypes.Search = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
