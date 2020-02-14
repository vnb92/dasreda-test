import { combineReducers } from 'redux';
import { repos } from './repos';
import { filter } from './filter';
import { search } from './search';

export const reducer = combineReducers({
  repos,
  filter,
  search,
});
