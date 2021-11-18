import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { LoginWrap, LoginBox, FormTitle, FormSpan, FormSt, InputId, FormBtn, LinkCon } from './styles';
import axios from 'axios';
import { useAppContext, setToken } from '@utils/store';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const { dispatch } = useAppContext();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      try {
        const response = axios.post('http://localhost:8000/accounts/signup/', { email, password });
        const {
          data: { token: jwtToken },
        } = response;
        // dispatch(setToken(jwtToken));
      } catch (error) {
        if (error.response) {
          console.log(error.response);
        }
      }
    },
    [email, password],
  );

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <LoginWrap>
      <LoginBox>
        <FormTitle>회의 관리 시스템</FormTitle>
        <FormSpan>conference management</FormSpan>
        <FormSpan>system</FormSpan>
        <FormSt onSubmit={onSubmit}>
          <InputId type="text" placeholder="ID" value={email} onChange={onChangeEmail}></InputId>
          <InputId type="password" placeholder="Password" value={password} onChange={onChangePassword}></InputId>
          <FormBtn>로그인</FormBtn>
          <LinkCon>
            <Link to="/register">회원가입</Link>
            <Link to="/">비밀번호 찾기</Link>
          </LinkCon>
        </FormSt>
      </LoginBox>
    </LoginWrap>
  );
};
export default Login;
