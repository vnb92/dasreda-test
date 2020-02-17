import React, { FC } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import i18n from '../../i18n';
import { Filters } from '../Filters/Filters';
import { Table } from '../Table/Table';
import { StoreType } from '../../types/store';
import './App.scss';

type TProps = {
  store: StoreType
};

export const App: FC<TProps> = ({ store }) => (
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <div
        className="app"
        data-testid="app"
      >
        <Filters />
        <Table />
      </div>
    </I18nextProvider>
  </Provider>
);
