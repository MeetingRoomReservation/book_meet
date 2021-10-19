import { Link } from "react-router-dom";
import { LoginWrap,LoginBox,FormTitle,FormSpan,FormSt,InputId,FormBtn,LinkCon } from "./styles";


const Login = () => {
  
  return (
    <LoginWrap>
      <LoginBox>
        <FormTitle>회의 관리 시스템</FormTitle>
        <FormSpan>conference management</FormSpan>
        <FormSpan>system</FormSpan>
        <FormSt>
          <InputId type="text" placeholder="ID"></InputId>
          <InputId type="password" placeholder="Password"></InputId>
          <Link to="/main">
            <FormBtn>로그인</FormBtn>
          </Link>

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
