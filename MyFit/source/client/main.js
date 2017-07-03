import React from 'react';
//take router
import Router from 'react-router';
import ReactDOM from 'react-dom';
//take history
import createBrowserHistory from 'history/lib/createBrowserHistory';

//import routes
import routes from './routes';

let history = createBrowserHistory();

//render the app with ther router
ReactDOM.render(
    <Router history={history}>{ routes }</Router>,
    document.getElementById('app')
);