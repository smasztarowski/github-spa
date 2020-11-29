import { FC } from 'react';
import { Provider } from 'react-redux'
import Container from '@material-ui/core/Container';
import { ToastProvider } from 'react-toast-notifications'
import { Router as ReactRouter } from 'react-router-dom';

import { rootStore } from '../Root/RootStore/RootStore';
import { Router } from '../Router/Router';

import { browserHistory } from '../navigation/utils/history';

export const App: FC = () => {
  return (
    <Provider store={rootStore}>
      <ReactRouter history={browserHistory}>
        <ToastProvider>
          <Container>
            <Router />
          </Container>
        </ToastProvider>
      </ReactRouter>
    </Provider>
  );
}

App.displayName = App.name;
