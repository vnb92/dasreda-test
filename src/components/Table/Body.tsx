import React, { FC } from 'react';
import { TableBody } from '@material-ui/core';
import { Repo } from '../Repo/Repo';
import { StateTypes } from '../../types/state';

type TProps = {
  repos: StateTypes.Repo[]
};

export const Body: FC<TProps> = ({ repos }) => (
  <TableBody>
    {repos.map(repo => (
      <Repo
        key={repo.id}
        repo={repo}
      />
    ))}
  </TableBody>
);
