import { getFilteredRepos } from './getFilteredRepos';
import { StateTypes } from '../types/state';

const mockRepos = [
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

describe('getFilteredRepos selector', () => {

  test('license only', () => {
    const mockState: StateTypes.State = {
      search: '',
      filter: {
        licenses: [],
        value: 'MIT',
      },
      repos: mockRepos,
    }

    const result = getFilteredRepos(mockState);
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

  test('empty repos', () => {
    const mockState: StateTypes.State = {
      search: '',
      filter: {
        licenses: [],
        value: 'MIT',
      },
      repos: [],
    }

    const result = getFilteredRepos(mockState);
    const expected: StateTypes.Repo[] = [];

    expect(result).toStrictEqual(expected);
  });

  test('not found license', () => {
    const mockState: StateTypes.State = {
      search: '',
      filter: {
        licenses: [],
        value: 'FAKE',
      },
      repos: mockRepos,
    }

    const result = getFilteredRepos(mockState);
    const expected: StateTypes.Repo[] = [];

    expect(result).toStrictEqual(expected);
  });

  test('search only', () => {
    const mockState: StateTypes.State = {
      search: 'JS',
      filter: {
        licenses: [],
        value: '',
      },
      repos: mockRepos,
    }

    const result = getFilteredRepos(mockState);
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

  test('search not found', () => {
    const mockState: StateTypes.State = {
      search: 'GO-GO',
      filter: {
        licenses: [],
        value: '',
      },
      repos: mockRepos,
    }

    const result = getFilteredRepos(mockState);
    const expected: StateTypes.Repo[] = [];

    expect(result).toStrictEqual(expected);
  });

  test('search and license', () => {
    const mockState: StateTypes.State = {
      search: 'js',
      filter: {
        licenses: [],
        value: 'MIT',
      },
      repos: mockRepos,
    }

    const result = getFilteredRepos(mockState);
    const expected: StateTypes.Repo[] = [
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
});