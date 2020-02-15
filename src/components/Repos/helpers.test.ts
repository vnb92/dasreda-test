import { filterReposByLicense, filterReposBySearch } from './helpers';
import { StateTypes } from '../../types/state';

const mockRepos: StateTypes.Repo[] = [
  {
    id: 1,
    name: 'js',
    created_at: '11-11-1111',
    updated_at: '11-11-1111',
    stargazers_count: 1,
    license:  null,
  },
  {
    id: 2,
    name: 'ts',
    created_at: '22-22-2222',
    updated_at: '22-22-2222',
    stargazers_count: 2,
    license:  {
      name:'MIT',
      key: 'fake',
      spdx_id: 'fake',
      url: 'fake',
      node_id: 'fake',
    },
  },
  {
    id: 3,
    name: 'js with license',
    created_at: '11-11-1111',
    updated_at: '11-11-1111',
    stargazers_count: 1,
    license:  {
      name:'MIT',
      key: 'fake',
      spdx_id: 'fake',
      url: 'fake',
      node_id: 'fake',
    },
  }
];

test('filterReposByLicense with params', () => {
  const license = 'MIT';

  const result = filterReposByLicense(mockRepos, license);
  const expected = [
    {
      id: 2,
      name: 'ts',
      created_at: '22-22-2222',
      updated_at: '22-22-2222',
      stargazers_count: 2,
      license:  {
        name:'MIT',
        key: 'fake',
        spdx_id: 'fake',
        url: 'fake',
        node_id: 'fake',
      },
    },
    {
      id: 3,
      name: 'js with license',
      created_at: '11-11-1111',
      updated_at: '11-11-1111',
      stargazers_count: 1,
      license:  {
        name:'MIT',
        key: 'fake',
        spdx_id: 'fake',
        url: 'fake',
        node_id: 'fake',
      },
    }
  ];

  expect(result).toStrictEqual(expected);
});

test('filterReposByLicense empty repos', () => {
  const repos: StateTypes.Repo[] = [];

  const license = 'MIT';

  const result = filterReposByLicense(repos, license);
  const expected: StateTypes.Repo[] = [];

  expect(result).toStrictEqual(expected);
});

test('filterReposByLicense not found license', () => {
  const license = 'FAKE';

  const result = filterReposByLicense(mockRepos, license);
  const expected: StateTypes.Repo[] = [];

  expect(result).toStrictEqual(expected);
});

test('filterReposBySearch with params', () => {
  const search = 'JS';

  const result = filterReposBySearch(mockRepos, search);
  const expected: StateTypes.Repo[] = [
    {
      id: 1,
      name: 'js',
      created_at: '11-11-1111',
      updated_at: '11-11-1111',
      stargazers_count: 1,
      license:  null,
    },
    {
      id: 3,
      name: 'js with license',
      created_at: '11-11-1111',
      updated_at: '11-11-1111',
      stargazers_count: 1,
      license:  {
        name:'MIT',
        key: 'fake',
        spdx_id: 'fake',
        url: 'fake',
        node_id: 'fake',
      },
    }
  ];

  expect(result).toStrictEqual(expected);
});

test('filterReposBySearch not found', () => {
  const search = 'GO-GO';

  const result = filterReposBySearch(mockRepos, search);
  const expected: StateTypes.Repo[] = [];

  expect(result).toStrictEqual(expected);
});

test('filterReposBySearch empty repos', () => {
  const search = 'GO-GO';
  const repos: StateTypes.Repo[] = []

  const result = filterReposBySearch(repos, search);
  const expected: StateTypes.Repo[] = [];

  expect(result).toStrictEqual(expected);
});
