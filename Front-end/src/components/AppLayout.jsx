import React from 'react';
import Header from './Header';

const AppLayout = ({ children }) => {
  console.log(children);
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};

export default AppLayout;
