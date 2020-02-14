import * as C from '../constants';

export const changeFilter = (payload: string) => ({
  type: C.CHANGE_FILTER,
  payload,
} as const);
