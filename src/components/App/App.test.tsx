import React from 'react';
import { render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { App } from './App';

const mockStore = configureMockStore();

test('render app', () => {
  const store = mockStore({ repos: [] })
  const { getByTestId } = render(
    <App store={store} />
  );
  const appContainer = getByTestId('app');
  expect(appContainer).toBeInTheDocument();
});
