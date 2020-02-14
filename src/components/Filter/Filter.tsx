import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import { actions } from '../../store/actions';
import { StateTypes } from '../../types/state';
import './Filter.css';

type TProps = {
  label: string;
};

type THandleChange = (e: any) => void;

export const Filter: FC<TProps> = ({ label }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const filter = useSelector((state: StateTypes.State) => state.filter);

  const handleChange: THandleChange = e => {
    dispatch(
      actions.changeFilter(e.target.value),
    );
  };

  const withoutFilterValue = '';

  return (
    <FormControl className="filter">
      <InputLabel id="filter">{label}</InputLabel>
      <Select
        labelId="filter"
        value={filter.value}
        onChange={handleChange}
      >
        <MenuItem value={withoutFilterValue}>{t('withoutFilter')}</MenuItem>

        {filter.licenses.map(license => (
          <MenuItem
            key={license}
            value={license}
          >
            {license}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
