import { Store } from 'redux';
import { StateTypes } from './state';
import { ActionTypes } from './actions';

export type StoreType = Store<StateTypes.State, ActionTypes>;
