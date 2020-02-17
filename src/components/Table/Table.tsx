import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import {
  Paper,
  TableContainer,
  Table as MaterialTable,
} from '@material-ui/core';
import { Head } from './Head';
import { Body } from './Body';
import { getFilteredRepos } from '../../selectors/getFilteredRepos';
import './Table.scss';

export const Table: FC = () => {
  const filteredRepos = useSelector(getFilteredRepos);

  return (
    <TableContainer component={Paper}>
      <MaterialTable
        classes={{ root: 'repos-table' }}
        aria-label="simple table"
      >
        <Head />
        <Body repos={filteredRepos} />
      </MaterialTable>
    </TableContainer>
  );
};
