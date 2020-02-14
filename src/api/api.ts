import axios, { AxiosRequestConfig } from 'axios';
import { queryBuilder } from './queryBuilder/queryBuilder';
import { validateReposResponse } from './typeGuards';
import { IApi, TOptions } from './types';
import { ENV } from '../config';

class Api implements IApi {
  url: string | null = null;

  constructor(url: string) {
    this.url = url;
  }

  getRepos = async (options: TOptions, config: AxiosRequestConfig = {}) => {
    const query = queryBuilder(options);
    const request = `${this.url}/search/repositories?${query}`;
    const response = await axios.get<unknown>(request, config);

    if (!validateReposResponse(response)) {
      throw new Error('invalid response');
    }

    return response.data.items;
  };
}

export const api = new Api(ENV.API_URL);
