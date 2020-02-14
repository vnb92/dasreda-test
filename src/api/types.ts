import { TRepo } from '../types';

export type TFilters = {
  language?: string;
  created?: string;
  keyWords?: string[];
};

export type TOptions = {
  filters?: TFilters;
  sort?: 'stars' | 'forks' | 'help-wanted-issues' | 'updated';
  order?: 'desc' | 'asc';
  pageSize?: number;
};

export interface IApi {
  url: string | null;
  getRepos: (options: TOptions) => Promise<TRepo[]>,
  getLicenses?: () => {},
}
