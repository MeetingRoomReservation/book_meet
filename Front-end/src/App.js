import React from 'react';
import AppRouter from '@components/Router';
import GlobalStyle from '@components/GlobalStyles';
// import AccountsRouter from 'components/AccountsRouter';

function App() {
  return (
    <>
      {/* <AccountsRouter /> */}
      <AppRouter />
      <GlobalStyle />
    </>
  );
}

export default App;
