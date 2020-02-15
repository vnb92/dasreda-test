import * as C from '../constants';
import { StateTypes } from '../../types/state';
import { ReducerTypes } from '../../types/reducers';

const defaultState: StateTypes.Filter = {
  licenses: [],
  value: '',
};

export const filter: ReducerTypes.Filter = (
  state = defaultState,
  { type, payload },
) => {
  switch (type) {
    case C.CHANGE_FILTER:
      return {
        ...state,
        value: payload,
      };

    default:
      return state;
  }
};
