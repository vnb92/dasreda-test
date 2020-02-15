import i18n from '../../i18n';
import { StateTypes } from '../../types/state';

type TFilterRepos = (
  repos: StateTypes.Repo[],
  filter: string,
) => StateTypes.Repo[];

export const filterReposByLicense: TFilterRepos = (
  repos,
  licenseFilter,
) => repos.filter(({ license }) => {
  if (!licenseFilter) return true;

  const isFilterByWithoutLicense = licenseFilter === i18n.t('withoutLicense');

  if (license !== null && !isFilterByWithoutLicense) {
    return license.name === licenseFilter;
  }

  if (license === null && isFilterByWithoutLicense) {
    return true;
  }

  return false;
});

export const filterReposBySearch: TFilterRepos = (
  repos,
  searchFilter,
) => repos.filter(({ name }) => {
  const lowerCaseName = name.toLowerCase();
  const lowerSearchFilter = searchFilter.toLowerCase();
  return lowerCaseName.includes(lowerSearchFilter);
});
