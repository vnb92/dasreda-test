import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { ReposTable } from '../ReposTable/ReposTable';
import { filterReposByLicense, filterReposBySearch } from './helpers';
import { StateTypes } from '../../types/state';

export const Repos: FC = () => {
  const repos = useSelector(
    (state: StateTypes.State) => state.repos,
  );
  const licenseFilter = useSelector(
    (state: StateTypes.State) => state.filter.value,
  );
  const searchFilter = useSelector(
    (state: StateTypes.State) => state.search,
  );

  const filteredReposByLicense = filterReposByLicense(repos, licenseFilter);
  const filteredReposBySearch = filterReposBySearch(filteredReposByLicense, searchFilter);

  return (
    <ReposTable
      repos={filteredReposBySearch}
    />
  );
};
