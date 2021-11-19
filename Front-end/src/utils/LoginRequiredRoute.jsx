import React from 'react';
import { Route, Redirect } from 'react-router';
import { useAppContext } from 'utils/store';

export default function LoginRequiredRoute({ component: Component, kwargs }) {
  const {
    store: { isAuthenticated },
  } = useAppContext();

  console.log('isAuthnticated :', isAuthenticated);

  return (
    <Route
      {...kwargs}
      render={(props) => {
        if (isAuthenticated) {
          return <Component {...props} />;
        } else {
          return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
        }
      }}
    />
  );
}
