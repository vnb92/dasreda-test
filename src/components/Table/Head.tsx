import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  TableHead,
  TableRow,
  TableCell,
} from '@material-ui/core';

export const Head: FC = () => {
  const { t } = useTranslation();

  const titlesMapByClassNamePostfix = {
    repo: 'repo',
    date: 'createdDate',
    stars: 'stars',
    license: 'license',
  };

  const titlesMapByClassNamePostfixToArray = Object.entries(titlesMapByClassNamePostfix);

  return (
    <TableHead classes={{ root: 'repos-table__head' }}>
      <TableRow>
        {titlesMapByClassNamePostfixToArray.map(([classNamePostfix, i18nTitle]) => (
          <TableCell
            key={i18nTitle}
            classes={{ root: `repos-table__cell repos-table__cell--${classNamePostfix}` }}
          >
            {t(i18nTitle)}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
