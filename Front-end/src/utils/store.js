import React, { createContext, useContext } from 'react';
import { getStorageItem, setStorageItem } from 'utils/useLocalStorage';
import useReducerWithSideEffects, { UpdateWithSideEffect } from 'use-reducer-with-side-effects';

const AppContext = createContext();

const reducer = (prevState, action) => {
  const { type } = action;
  switch (type) {
    case SET_TOKEN: {
      const { payload: jwtToken } = action;
      const newState = {
        ...prevState,
        jwtToken,
      };
      return UpdateWithSideEffect(newState, (state, dispatch) => {
        setStorageItem('jwtToken', jwtToken);
      });
    }
    case DELETE_TOKEN: {
      const newState = {
        ...prevState,
        jwtToken: '',
      };
      return UpdateWithSideEffect(newState, (state, dispatch) => {
        setStorageItem('jwtToken', '');
      });
    }
    default:
      return;
  }
};

export const AppProvider = ({ children }) => {
  const [store, dispatch] = useReducerWithSideEffects(reducer, {
    jwtToken: getStorageItem('jwtToken', ''),
  });
  return <AppContext.Provider value={{ store, dispatch }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);

// Actions
const SET_TOKEN = 'APP/SET_TOKEN';
const DELETE_TOKEN = 'APP/DELETE_TOKEN';

// Action Creatores
export const setToken = (token) => ({ type: SET_TOKEN, payload: token });
export const deleteToken = (token) => ({ type: DELETE_TOKEN });
