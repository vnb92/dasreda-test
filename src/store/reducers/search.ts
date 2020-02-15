import * as C from '../constants';
import { StateTypes } from '../../types/state';
import { ReducerTypes } from '../../types/reducers';

const defaultState: StateTypes.Search = '';

export const search: ReducerTypes.Search = (
  state = defaultState,
  { type, payload },
) => {
  switch (type) {
    case C.INPUT_SEARCH:
      return payload;

    default:
      return state;
  }
};
