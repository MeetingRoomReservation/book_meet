import React from 'react';
import NoticeList from '@components/post/NoticeList';
import NoticeView from '@components/post/NoticeView';
import { Switch, Route } from 'react-router-dom';
import NoticeNewForm from 'components/post/NoticeNewForm';

const Index = () => {
  return (
    <>
      <Switch>
        <Route path="/notices/writing" component={NoticeNewForm} />
        <Route path="/notices/:id" component={NoticeView} />
        <Route path="/notices" component={NoticeList} />
      </Switch>
    </>
  );
};

export default Index;
