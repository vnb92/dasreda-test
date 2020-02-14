import { ApiTypes } from '../../types/api';

export const queryBuilder = (params: ApiTypes.Options): string => {
  const {
    filters = [],
    sort,
    order = 'desc',
  } = params;

  const filterSeparator = ':';
  const filterItemSeparator = '+';
  const q: string = Object.entries(filters)
    .map(filter => {
      const key = filter[0];
      if (key === 'keyWords') {
        const words = filter[1];
        const wordsToString = Array.isArray(words)
          ? words.join(filterItemSeparator)
          : '';

        return wordsToString;
      }

      return filter.join(filterSeparator);
    })
    .join(filterItemSeparator);

  const queryParams = {
    q,
    sort,
    order,
  };

  const paramSeparator = '=';
  const querySeparator = '&';
  const query = Object.entries(queryParams)
    .map(filter => {
      const value = filter[1];
      if (!value) return '';
      return filter.join(paramSeparator);
    })
    .filter(item => Boolean(item))
    .join(querySeparator);

  return query;
};
