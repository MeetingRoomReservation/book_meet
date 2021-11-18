import styled, { css } from 'styled-components';
import AuthTimer from '@components/AuthTimer';

export const RegisterWrap = styled.div`
  background-image: url('/assets/image/room2.jpg');
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  max-height: 1080px;
  background-position: center center;
  position: relative;
`;
export const RegisterBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  max-width: 600px;
  min-width: 500px;
  background: rgba(000, 000, 000, 0.7);
  border-radius: 20px;
`;
export const FormTitle = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 40px;
  font-weight: 300;
  margin: 40px 0 0px;
`;
export const FormSt = styled.form`
  margin-top: 15px;
  width: 100%;
  display: inline-block;
  text-align: center;
`;
export const FormBox = styled.div`
  position: relative;
`;
export const Label = styled.label`
  position: absolute;
  transition: all 0.2s;
  color: transparent;
  top: 35%;
  left: 13%;
  font-size: 12px;
  ${(props) =>
    props.isBlank &&
    css`
      color: #166cea;
      visibility: visibility;
    `};
`;

export const InputSt = styled.input`
  margin-top: 18px;
  width: 80%;
  border-radius: 30px;
  font-size: 16px;
  padding: 15px 30px;
  text-align: center;
  border: none;
  &:focus {
    box-shadow: 0 0 10px 1px #166cea;
  }
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &:disabled {
    ${(props) => props.disabled && 'background: #bbb'}
`;
export const VerificationBtn = styled.button`
  border: none;
  background: transparent;
  position: absolute;
  top: 50%;
  right: 12%;
  cursor: pointer;
  color: #166cea;
  &:focus {
    font-weight: bold;
  }
`;
export const FormBtn = styled.button`
  width: 80%;
  background: #5a7fc3;
  color: #fff;
  font-size: 25px;
  padding: 5px 0;
  border-radius: 30px;
  border: none;
  margin-top: 15px;
  cursor: pointer;
`;
export const LinkCon = styled.div`
  width: 80%;
  margin: 23px auto;
  a {
    width: 50%;
    color: #fff;
    font-size: 20px;
    font-weight: 200;
  }
  a:nth-child(1) {
    text-align: left;
  }
  a:nth-child(2) {
    text-align: right;
  }
`;
export const ErrMs = styled.span`
  color: red;
  width: 100%;
  text-align: center;
  display: inline-block;
  margin-top: 15px;
  font-size: 16px;
  font-weight: 300;
`;
export const Timer = styled(AuthTimer)`
  color: red;
`;
