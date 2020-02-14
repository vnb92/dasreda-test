import { queryBuilder } from './queryBuilder';
import { TOptions } from '../types';


test('queryBuilder full params', () => {
  const params: TOptions = {
    filters: {
      keyWords: ['js', 'tetris'],
      language: 'javascript',
      created: '2020-01-20',
    },
    sort: 'stars',
    order: 'asc'
  }

  const result = queryBuilder(params);
  const expected = 'q=js+tetris+language:javascript+created:2020-01-20&sort=stars&order=asc';
  expect(result).toBe(expected);
});

test('queryBuilder without params', () => {
  const params: TOptions = {}
  const result = queryBuilder(params);
  const expected = 'order=desc';
  expect(result).toBe(expected);
});
