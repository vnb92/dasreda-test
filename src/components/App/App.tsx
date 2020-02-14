import React, { FC } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import i18n from '../../i18n';
import { Repos } from '../Repos/Repos';
import './App.css';

type TProps = {
  store: Store
};

export const App: FC<TProps> = ({ store }) => (
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <div
        className="app"
        data-testid="app"
      >
        <Repos />
      </div>
    </I18nextProvider>
  </Provider>
);
