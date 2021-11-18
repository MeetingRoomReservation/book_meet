import React from 'react';
import Header from '@components/Header';
import NoticeList from '@components/post/NoticeList';
import PostWriting from '@components/post/PostWriting';
import PostView from '@components/post/PostView';
import { Switch, Route } from 'react-router-dom';
import NoticeNewForm from 'components/post/NoticeNewForm';

const Index = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/notices/writing" component={NoticeNewForm} />
        {/* <Route exact path="/notices/writing" component={NoticeNewForm} /> */}
        <Route path="/notices/:id" component={PostView} />
        <Route path="/notices" component={NoticeList} />
      </Switch>
    </>
  );
};

export default Index;
