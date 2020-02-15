import React, { FC } from 'react';
import { Search } from '../Search/Search';
import { LicenseFilter } from '../LicenseFilter/LicenseFilter';
import './Filters.scss';

export const Filters: FC = () => (
  <div className="filters">
    <Search />
    <LicenseFilter />
  </div>
);
