import { Reducer } from 'redux';
import { StateTypes } from './state';
import { ActionTypes } from './actions';

export namespace ReducerTypes {
  export type Repos = Reducer<StateTypes.Repo[], ActionTypes>;
  export type Filter = Reducer<StateTypes.Filter, ActionTypes>;
  export type Search = Reducer<StateTypes.Search, ActionTypes>;
}
