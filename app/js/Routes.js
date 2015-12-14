'use strict';

import React                       from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import CreateBrowserHistory        from 'history/lib/createBrowserHistory';

import HomePage                    from './pages/HomePage';

export default (
  <Router history={CreateBrowserHistory()}>
    <Route path="/" component={HomePage} />
  </Router>
);
