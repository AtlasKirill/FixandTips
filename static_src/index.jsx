import React from 'react';
import ReactDOM from 'react-dom';
// import createHistory from 'history/createBrowserHistory';
// import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import App from './components/App.jsx';
import { BrowserRouter } from 'react-router-dom';

// const history = createHistory();

ReactDOM.render(

      <BrowserRouter>
            <div>
                <App />
            </div>
      </BrowserRouter>,
document.getElementById('root'));


