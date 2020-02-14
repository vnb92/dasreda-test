import * as C from '../constants';

export const inputSearch = (payload: string) => ({
  type: C.INPUT_SEARCH,
  payload,
} as const);
