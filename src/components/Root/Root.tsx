import React, { FC, useEffect, useState } from 'react';
import { App } from '../App/App';
import { Loader } from '../Loader/Loader';
import { configureStore } from '../../store/store';
import { getInitialState } from '../../init';
import { StoreType } from '../../types/store';

let store: StoreType;

export const Root: FC = () => {
  const [isReposLoaded, setIsReposLoaded] = useState(false);

  useEffect(() => {
    getInitialState()
      .then(response => {
        store = configureStore(response);
        setIsReposLoaded(true);
      })
      .catch(alert);
  }, []);

  return (
    <>
      {isReposLoaded
        ? <App store={store} />
        : <Loader />}
    </>
  );
};
