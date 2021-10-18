import { Link } from "react-router-dom";
import {RegisterWrap,RegisterBox,FormTitle,FormSt,InputSt,ErrMs,FormBtn,LinkCon } from './styles';

const Register = () => {
  return (
    <RegisterWrap>
      <RegisterBox>
        <FormTitle>회원가입</FormTitle>
        <FormSt>
          <InputSt type="email" placeholder="이메일"></InputSt>
          <InputSt type="text" placeholder="성함"></InputSt>
          <InputSt type="password" placeholder="비밀번호"></InputSt>
          <InputSt type="password" placeholder="비밀번호 확인"></InputSt>
          <ErrMs>비밀번호 형식이 맞지 않습니다.</ErrMs>
          <FormBtn>가입하기</FormBtn>
          <LinkCon>
            <Link to="/">돌아가기</Link>
          </LinkCon>
        </FormSt>
      </RegisterBox>
    </RegisterWrap>
  );
};
export default Register;
