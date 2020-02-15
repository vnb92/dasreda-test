import React, { FC } from 'react';
import { CircularProgress } from '@material-ui/core';

type TProps = {
  value: number;
};

export const Loader: FC<TProps> = ({ value }) => (
  <CircularProgress value={value} />
);
