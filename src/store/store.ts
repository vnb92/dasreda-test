import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './reducers';
import { StateTypes } from '../types/state';
import { ActionTypes } from '../types/actions';

type TConfigureStore = (initialState: StateTypes.State) => Store<StateTypes.State, ActionTypes>;
export const configureStore: TConfigureStore = initialState => {
  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware()),
  );

  return store;
};
