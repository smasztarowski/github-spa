import { FC } from 'react';
import { Router as ReactRouter } from 'react-router-dom';

import { Router } from '../Router/Router';

import { browserHistory } from '../navigation/utils/history';

import './App.css';

export const App: FC = () => {
  return (
    <ReactRouter history={browserHistory}>
      <Router />
    </ReactRouter>
  );
}

App.displayName = App.name;
