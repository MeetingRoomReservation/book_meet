import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

const Login = loadable(() => import('@pages/Login'));
const Register = loadable(() => import('@pages/Register'));

const AccountsRouter = () => {
  return (
    <Switch>
      <Route path="/accounts/login" component={Login} />
      <Route path="/accounts/register" component={Register} />
    </Switch>
  );
};

export default AccountsRouter;
