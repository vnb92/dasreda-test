import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  TableHead,
  TableRow,
  TableCell,
} from '@material-ui/core';

export const Head: FC = () => {
  const { t } = useTranslation();

  const headTitlesMap = {
    repo: 'repo',
    date: 'createdDate',
    stars: 'stars',
    license: 'license',
  };

  const headTitlesMapToArray = Object.entries(headTitlesMap);

  return (
    <TableHead classes={{ root: 'repos-table__head' }}>
      <TableRow>
        {headTitlesMapToArray.map(([selectorPostfix, i18nTitle]) => (
          <TableCell
            key={i18nTitle}
            classes={{ root: `repos-table__cell repos-table__cell--${selectorPostfix}` }}
          >
            {t(i18nTitle)}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
