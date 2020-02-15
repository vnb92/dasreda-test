import React, { FC, useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import { App } from '../App/App';
import { configureStore } from '../../store/store';
import { getInitialState } from '../../init';
import { StoreType } from '../../types/store';
import './Root.scss';

let store: StoreType;

export const Root: FC = () => {
  const [isReposLoaded, setIsReposLoaded] = useState(false);
  const [loadedValue, setLoadedValue] = useState(0);

  const handleUploadProgress = (progressEvent: ProgressEvent) => {
    /* TODO: не успел разобраться почему total = 0
    ** и нет content-length в ответе запроса */
    const { loaded, total } = progressEvent;
    const percentMultiplier = 100;
    const percent = (loaded / total) * percentMultiplier;
    setLoadedValue(percent);
  };

  useEffect(() => {
    getInitialState(handleUploadProgress)
      .then(response => {
        store = configureStore(response);
        setIsReposLoaded(true);
      })
      .catch(alert); // alert - не для продакшена можно:)
  }, []);

  return (
    <>
      {isReposLoaded
        ? <App store={store} />
        : (
          <CircularProgress
            classes={{ root: 'loader' }}
            value={loadedValue}
          />
        )}
    </>
  );
};
