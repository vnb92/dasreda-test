import { AxiosRequestConfig } from 'axios';
import { StateTypes } from './state';

export namespace ApiTypes {
  export type Filters = {
    language?: string;
    created?: string;
    keyWords?: string[];
  };

  export type Options = {
    filters?: Filters;
    sort?: 'stars' | 'forks' | 'help-wanted-issues' | 'updated';
    order?: 'desc' | 'asc';
    pageSize?: number;
  };

  export interface Api {
    url: string | null;
    getRepos: (options: Options, config: AxiosRequestConfig) => Promise<StateTypes.Repo[]>,
    getLicenses?: () => {},
  }
}
