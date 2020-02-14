import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { TableRow, TableCell } from '@material-ui/core';
import { TRepo } from '../../types';

type TProps = {
  repo: TRepo;
};

export const Repo: FC<TProps> = ({
  repo: {
    id,
    name,
    created_at: createdDate,
    stargazers_count: starsCount,
    license,
  },
}) => {
  const { t } = useTranslation();

  const date = new Date(createdDate);
  const repoLicense = license?.name || '-';

  return (
    <TableRow key={id}>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="right">{t('formattedDate', { date })}</TableCell>
      <TableCell align="right">{starsCount}</TableCell>
      <TableCell align="right">{repoLicense}</TableCell>
    </TableRow>
  );
};
