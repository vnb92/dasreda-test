import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { TableRow, TableCell } from '@material-ui/core';
import { StateTypes } from '../../types/state';

type TProps = {
  repo: StateTypes.Repo;
};

export const Repo: FC<TProps> = ({
  repo: {
    name,
    created_at: createdDate,
    stargazers_count: starsCount,
    license,
  },
}) => {
  const { t } = useTranslation();

  const date = new Date(createdDate);
  const noLicenseTitle = '-';
  const repoLicense = license?.name || noLicenseTitle;

  return (
    <TableRow
      classes={{ root: 'repos-table__row' }}
    >
      <TableCell
        classes={{ root: 'repos-table__cell repos-table__cell--repo' }}
        data-th={t('repo')}
      >
        {name}
      </TableCell>
      <TableCell
        classes={{ root: 'repos-table__cell repos-table__cell--date' }}
        data-th={t('createdDate')}
      >
        {t('formattedDate', { date })}
      </TableCell>
      <TableCell
        classes={{ root: 'repos-table__cell repos-table__cell--stars' }}
        data-th={t('stars')}
      >
        {starsCount}
      </TableCell>
      <TableCell
        classes={{ root: 'repos-table__cell repos-table__cell--license' }}
        data-th={t('license')}
      >
        {repoLicense}
      </TableCell>
    </TableRow>
  );
};
