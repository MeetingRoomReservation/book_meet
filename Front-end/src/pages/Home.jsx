import React from 'react';
import Header from 'components/Header';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import AppLayout from 'components/AppLayout';

const Main = loadable(() => import('@pages/Main'));
const Minutes = loadable(() => import('@pages/Minutes'));
const Users = loadable(() => import('@pages/Users'));
const Notices = loadable(() => import('@pages/Notices'));
const Rooms = loadable(() => import('@pages/Rooms'));

const Home = () => {
  return (
    <>
      <Header />
      <Route exact path="/" component={Main} />
      <Route path="/users" component={Users} />
      <Route path="/minutes" component={Minutes} />
      <Route path="/notices" component={Notices} />
      <Route path="/rooms" component={Rooms} />
    </>
  );
};

export default Home;
