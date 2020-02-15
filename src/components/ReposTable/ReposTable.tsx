import React, { FC } from 'react';
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

type TProps = {
  repos: StateTypes.Repo[]
};

export const ReposTable: FC<TProps> = ({ repos }) => {
  const { t } = useTranslation();

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
          {repos.map(repo => (
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
