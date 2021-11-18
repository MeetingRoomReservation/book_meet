import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  RegisterWrap,
  RegisterBox,
  FormTitle,
  FormSt,
  FormBox,
  Label,
  InputSt,
  VerificationBtn,
  ErrMs,
  FormBtn,
  LinkCon,
  Timer,
} from './styles';
import useInput from 'utils/useInput';
import axios from 'axios';

const timerStyle = {
  width: '100%',
  'text-align': 'center',
  display: 'inline-block',
  'margin-top': '15px',
  'font-size': '16px',
  'font-weight': '300',
  color: 'red',
};

const Register = () => {
  const [email, onChangeEmail] = useInput('');
  const [name, onChangeName] = useInput('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState();
  const [mismatchError, setMismatchError] = useState(false);
  const [phone, setPhone] = useState('');
  const [isSend, setIsSend] = useState(false);
  const [otp, setOtp] = useState('');
  const [lock, setLock] = useState(false);
  const [timer, setTimer] = useState(false);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!mismatchError && lock) {
        alert('done');
        return;
      }
      alert('error');
    },
    [mismatchError, lock],
  );

  const onChangePassword = useCallback(
    (e) => {
      setPassword(e.target.value);
      setMismatchError(e.target.value !== passwordCheck);
    },
    [passwordCheck],
  );

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setMismatchError(e.target.value !== password);
    },
    [password],
  );

  const onChangePhone = useCallback((e) => {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
    setPhone(e.target.value);
  }, []);

  const onChangeOtp = useCallback((e) => {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
    setOtp(e.target.value);
  }, []);

  const onClickPhoneAuth = useCallback(
    (e) => {
      setLock(false);
      setIsSend(true);
      setTimer(false);
      axios
        .post('/accounts/phone_verify_request/', { phone_number: phone }, { withCredentials: true })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => setTimer(true));
    },
    [phone],
  );

  const onClickPhoneAuthCheck = useCallback(
    (e) => {
      setIsSend(false);
      setLock(true);
      setTimer(false);
      axios.post('accounts/phone_verify/', { phone_number: phone, otp }, { withCredentials: true }).then((response) => {
        console.log(response);
      });
    },
    [phone, otp],
  );

  return (
    <RegisterWrap>
      <RegisterBox>
        <FormTitle>회원가입</FormTitle>
        <FormSt onSubmit={onSubmit}>
          <FormBox className="email-form">
            <Label htmlFor="email" isBlank={email}>
              이메일
            </Label>
            <InputSt
              autoComplete="off"
              id="email"
              type="email"
              name="email"
              placeholder="이메일"
              value={email}
              onChange={onChangeEmail}
            />
          </FormBox>
          <FormBox className="name-form">
            <Label htmlFor="name" isBlank={name}>
              이름
            </Label>
            <InputSt
              autoComplete="off"
              id="name"
              type="text"
              name="name"
              placeholder="이름"
              value={name}
              onChange={onChangeName}
            />
          </FormBox>
          <FormBox className="password-form">
            <Label htmlFor="password" isBlank={password}>
              비밀번호
            </Label>
            <InputSt
              id="password"
              type="password"
              name="password"
              placeholder="비밀번호"
              value={password}
              onChange={onChangePassword}
            />
          </FormBox>
          <FormBox className="password-check-form">
            <Label htmlFor="password-check" isBlank={passwordCheck}>
              비밀번호 확인
            </Label>
            <InputSt
              id="password-check"
              type="password"
              name="password-check"
              placeholder="비밀번호 확인"
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            />
          </FormBox>
          <FormBox className="phone-form">
            <Label htmlFor="phone" isBlank={phone}>
              전화번호 (- 없이 입력)
            </Label>
            <InputSt
              id="phone"
              type="phone"
              name="phone"
              placeholder="전화번호 (- 없이 입력)"
              value={phone}
              onChange={onChangePhone}
              maxLength={11}
              autoComplete="off"
            />
            <VerificationBtn type="button" onClick={onClickPhoneAuth}>
              전송
            </VerificationBtn>
          </FormBox>
          {isSend && <ErrMs>메시지가 발송되었습니다.</ErrMs>}
          <FormBox className="otp-form">
            <Label htmlFor="otp" isBlank={otp}>
              인증번호 입력
            </Label>
            <InputSt
              id="otp"
              type="number"
              name="otp"
              placeholder="인증번호 입력"
              value={otp}
              onChange={onChangeOtp}
              disabled={lock}
              maxLength={6}
            />
            <VerificationBtn type="button" onClick={onClickPhoneAuthCheck}>
              확인
            </VerificationBtn>
          </FormBox>
          {timer && <Timer styles={timerStyle} />}
          {mismatchError && <ErrMs>비밀번호가 일치하지 않습니다.</ErrMs>}
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
