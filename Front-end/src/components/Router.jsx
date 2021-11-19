import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import AccountsRouter from './AccountsRouter';

const Home = loadable(() => import('@pages/Home'));

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/accounts/*" component={AccountsRouter} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default AppRouter;
