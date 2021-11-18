import React from 'react';
import Header from 'components/Header';
import SideBar from 'components/Sidebar';
import { Switch, Route } from 'react-router-dom';
import MyPage from '@components/users/Users';
import MyMinute from '@components/users/MyMinute';
import Modify from '@components/users/Modify';

const Index = () => {
  return (
    <>
      <Header />
      <SideBar />
      <Switch>
        <Route path="/users" exact component={MyPage} />
        <Route path="/users/minutes" component={MyMinute} />
        <Route path="/users/modify" component={Modify} />
      </Switch>
    </>
  );
};

export default Index;
