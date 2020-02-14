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
import { TState } from '../../types';

export const Repos: FC = () => {
  const { t } = useTranslation();
  const repos = useSelector((state: TState) => state.repos);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{t('repo')}</TableCell>
            <TableCell align="right">{t('createdDate')}</TableCell>
            <TableCell align="right">{t('stars')}</TableCell>
            <TableCell align="right">{t('license')}</TableCell>
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
