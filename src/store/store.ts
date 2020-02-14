import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './reducers';
import { TState } from '../types';

type TConfigureStore = (initialState: TState) => Store;
export const configureStore: TConfigureStore = initialState => {
  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware()),
  );

  return store;
};
