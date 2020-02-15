import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  TableHead,
  TableRow,
  TableCell,
} from '@material-ui/core';

export const Head: FC = () => {
  const { t } = useTranslation();

  return (
    <TableHead classes={{ root: 'repos-table__head' }}>
      <TableRow>
        <TableCell
          classes={{ root: 'repos-table__cell repos-table__cell--repo' }}
        >
          {t('repo')}
        </TableCell>
        <TableCell
          classes={{ root: 'repos-table__cell repos-table__cell--date' }}
        >
          {t('createdDate')}
        </TableCell>
        <TableCell
          classes={{ root: 'repos-table__cell repos-table__cell--stars' }}
        >
          {t('stars')}
        </TableCell>
        <TableCell
          classes={{ root: 'repos-table__cell repos-table__cell--license' }}
        >
          {t('license')}
        </TableCell>
      </TableRow>
    </TableHead>
  );
};
