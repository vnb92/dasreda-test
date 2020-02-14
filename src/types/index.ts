export type TLicense = {
  key: string;
  name: string;
  spdx_id: string;
  url: string;
  node_id: string;
};

export type TRepo = {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  stargazers_count: number;
  license: TLicense;
};

export type TState = {
  repos: TRepo[];
};
