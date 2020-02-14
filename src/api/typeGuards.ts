import { StateTypes } from '../types/state';

type TReposResponse = {
  data : {
    items: StateTypes.Repo[]
  }
};

type TSuccessResponse = {
  data: TSuccessResponseData
};

type TSuccessResponseData = {
  items: unknown[]
};

export function validateReposResponse(response: unknown): response is TReposResponse {
  if (
    !hasData(response)
    || !hasItems(response.data)
    || !isRepos(response.data.items)
  ) {
    return false;
  }

  return true;
}

function hasData(response: unknown): response is TSuccessResponse {
  return (
    !!response
    && Object.hasOwnProperty.call(response, 'data')
  );
}

function hasItems(data: unknown): data is TSuccessResponseData {
  return (
    !!data
    && Object.hasOwnProperty.call(data, 'items')
  );
}

function isRepos(items: unknown[]): items is StateTypes.Repo[] {
  return items.every(item => isRepo(item));
}

function isRepo(item: unknown): item is StateTypes.Repo[] {
  return (
    !!item
    && Object.hasOwnProperty.call(item, 'id')
    && Object.hasOwnProperty.call(item, 'name')
  );
}
