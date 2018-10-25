import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import initStore from './utils/store.jsx';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { loadSessionUserInfo } from './actions/session';
import apiUrl from './constants/apiUrls';

const history = createHistory();
const middleware = routerMiddleware(history);

const initialState = {
      sessionInfo: {
          data:
              {
                  id: 1,
                  username:''
              },
          isLogined: false,
      }
};

const store = initStore(initialState);
store.dispatch(loadSessionUserInfo(apiUrl.session));

ReactDOM.render(
      <Provider store={ store }>
            <ConnectedRouter history={ history }>
                  <div>
                        <App/>
                  </div>
            </ConnectedRouter>
      </Provider>,
document.getElementById('root'));

export default store;
