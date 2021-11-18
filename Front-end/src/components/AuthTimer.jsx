import React, { useState, useEffect, useRef, memo } from 'react';
import styled, { css } from 'styled-components';
import { ErrMs } from '@pages/Register/styles';

const CountDown = styled.div`
  ${(props) =>
    props.styles &&
    css`
      ${props.styles}
    `}
`;

const AuthTimer = memo(({ styles }) => {
  const [min, setMin] = useState(3);
  const [sec, setSec] = useState(0);
  const time = useRef(179);
  const timerId = useRef(null);

  useEffect(() => {
    timerId.current = setInterval(() => {
      setMin(parseInt(time.current / 60));
      setSec(time.current % 60);
      time.current -= 1;
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (time.current < 0) {
      clearInterval(timerId.current);
    }
  }, [sec]);

  return (
    <>
      {min === 0 && sec === 0 ? (
        <ErrMs>인증번호가 만료되었습니다.</ErrMs>
      ) : (
        <CountDown styles={styles}>
          남은시간 {min}:{sec}{' '}
        </CountDown>
      )}
    </>
  );
});

export default AuthTimer;
