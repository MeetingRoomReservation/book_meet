import React from 'react';
import loadable from '@loadable/component';
const Header = loadable(() => import('@components/Header.js'));

const index = () => {
  
  return (
      <>
        <Header/>
        <div>Main123</div>
      </>
    );
};

export default index;
