'use strict';

import React     from 'react';
import ReactDOM  from 'react-dom';

import Routes    from './Routes';

import JQuery from 'jquery';

window.$ = JQuery;

if ( process.env.NODE_ENV !== 'production' ) {
  // Enable React devtools
  window.React = React;
}

ReactDOM.render(Routes, document.getElementById('app'));