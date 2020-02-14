import { api } from './api/api';
import i18n from './i18n';
import { StateTypes } from './types/state';

type TGetInitialState = () => Promise<StateTypes.State>;

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

  const allLicenses: string[] = repos.map(repo => {
    if (repo && repo.license) {
      return repo.license.name;
    }
    return i18n.t('withoutLicense');
  });

  const uniqueLicenses = [...new Set(allLicenses)];

  return {
    repos,
    filter: {
      licenses: uniqueLicenses,
      value: '',
    },
    search: '',
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
