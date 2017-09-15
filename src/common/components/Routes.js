import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import HomePage from '../../pages/home/page';
import RegisterPage from '../../pages/register/page';
import LoginPage from '../../pages/login/page';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="login" component={LoginPage} />
    <Route path="register" component={RegisterPage} />
  </Route>
);
 