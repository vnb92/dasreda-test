import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { TextField } from '@material-ui/core';
import { actions } from '../../store/actions';
import { StateTypes } from '../../types/state';

type THandleInput = (e: any) => void;

export const Search: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const search = useSelector((state: StateTypes.State) => state.search);

  const handleInput: THandleInput = e => {
    dispatch(
      actions.inputSearch(e.target.value),
    );
  };

  const inputProps = {
    onInput: handleInput,
  };

  return (
    <TextField
      label={t('search')}
      value={search}
      inputProps={inputProps}
    />
  );
};
