import i18n from '../i18n';
import { StateTypes } from '../types/state';

type TFilteredRepos = {
  (state: StateTypes.State): StateTypes.Repo[];
  memoState?: StateTypes.State;
};

export const getFilteredRepos: TFilteredRepos = state => {
  const {
    repos,
    search: searchValue,
    filter: { value: licenseFilter },
  } = state;

  const filteredRepos = repos.filter(({ name, license }) => {
    const bySearch = matchBySearch(name, searchValue);

    const licenseName = license?.name || '';
    const byLicense = matchByLicense(licenseName, licenseFilter);

    return bySearch && byLicense;
  });

  return filteredRepos;
};

function matchBySearch(name: string, searchValue: string): boolean {
  if (!searchValue) return true;

  const lowerCaseName = name.toLowerCase();
  const lowerSearchFilter = searchValue.toLowerCase();
  const bySearch = lowerCaseName.includes(lowerSearchFilter);

  return bySearch;
}

function matchByLicense(licenseName: string, licenseFilter: string): boolean {
  if (!licenseFilter) return true;

  const isFilterByWithoutLicense = licenseFilter === i18n.t('withoutLicense');
  if (!licenseName && isFilterByWithoutLicense) {
    return true;
  }

  if (licenseName && !isFilterByWithoutLicense) {
    return licenseName === licenseFilter;
  }

  return false;
}
