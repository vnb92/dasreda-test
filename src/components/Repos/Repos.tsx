import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core';
import { Repo } from '../Repo/Repo';
import { Filter } from '../Filter/Filter';
import { StateTypes } from '../../types/state';

export const Repos: FC = () => {
  const { t } = useTranslation();
  const repos = useSelector(
    (state: StateTypes.State) => state.repos,
  );
  const filterValue = useSelector(
    (state: StateTypes.State) => state.filter.value,
  );

  const filteredRepos = repos.filter(({ license }) => {
    if (!filterValue) return true;

    const isFilterByWithoutLicense = filterValue === t('withoutLicense');

    if (license !== null && !isFilterByWithoutLicense) {
      return license.name === filterValue;
    }

    if (license === null && isFilterByWithoutLicense) {
      return true;
    }

    return false;
  });

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{t('repo')}</TableCell>
            <TableCell align="right">{t('createdDate')}</TableCell>
            <TableCell align="right">{t('stars')}</TableCell>
            <TableCell align="right">
              <Filter label={t('license')} />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredRepos.map(repo => (
            <Repo
              key={repo.id}
              repo={repo}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
