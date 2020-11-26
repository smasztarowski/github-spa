import { FC } from 'react';
import Container from '@material-ui/core/Container';
import { Router as ReactRouter } from 'react-router-dom';

import { Router } from '../Router/Router';

import { browserHistory } from '../navigation/utils/history';

export const App: FC = () => {
  return (
    <ReactRouter history={browserHistory}>
      <Container>
        <Router />
      </Container>
    </ReactRouter>
  );
}

App.displayName = App.name;
