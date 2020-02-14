export namespace StateTypes {
  export type State = {
    repos: Repo[];
    filter: Filter;
    search: string;
  };

  export type Repo = {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    stargazers_count: number;
    license: License | null;
  };

  export type License = {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
    node_id: string;
  };

  export type Filter = {
    licenses: string[],
    value: string,
  };

  export type Search = string;
}
