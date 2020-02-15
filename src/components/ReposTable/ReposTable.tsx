import React, { FC } from 'react';
import {
  Paper,
  TableContainer,
  Table,
} from '@material-ui/core';
import { Head } from './Head';
import { Body } from './Body';
import { StateTypes } from '../../types/state';
import './ReposTable.scss';

type TProps = {
  repos: StateTypes.Repo[]
};

export const ReposTable: FC<TProps> = ({ repos }) => (
  <TableContainer component={Paper}>
    <Table
      classes={{ root: 'repos-table' }}
      aria-label="simple table"
    >
      <Head />
      <Body repos={repos} />
    </Table>
  </TableContainer>
);
