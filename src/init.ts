import { api } from './api/api';
import { TState } from './types';

type TGetInitialState = () => Promise<TState>;

export const getInitialState: TGetInitialState = async () => {
  const ISODateMonthAgo = getISODateMonthAgo();
  const filters = {
    language: 'javascript',
    created: `>${ISODateMonthAgo}`,
  };

  const byStars = 'stars';

  const repos = await api.getRepos({
    filters,
    sort: byStars,
  });

  return {
    repos,
  };
};

function getISODateMonthAgo(): string {
  const monthShift = 1;
  const date = new Date();

  date.setMonth(date.getMonth() - monthShift);
  const formattedDate = date
    .toISOString()
    .slice(0, 10);

  return formattedDate;
}
