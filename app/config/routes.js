/*Main React Dependencies*/
import React from 'react';
import { Router, Route, Navigation, IndexRoute, hashHistory } from 'react-router';

/* Import Components */
import Main from '../components/Main';
import Enter from '../components/Enter/Enter';


let routes = (
  <Router history={hashHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={Enter} />
      </Route>
  </Router>
);

export default routes;
