import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  max-width: 100%;
  min-width: 1000px;
  padding: 25px;
  color: white;
  background-color: #344551;
  align-items: center;
`;

const Title = styled.div`
  font-size: 25px;
`;

const BtnContainer = styled.div`
  margin: 10px;
`;

const BtnList = styled.span`
  padding: 10px;
  a:hover {
    color: #ff9e0d;
  }
`;

const Header = () => {
  
  return (
    <MainContainer>
      <Title>
        <Link to="/main">회의 관리 시스템</Link>
      </Title>
      <BtnContainer>
        <BtnList>
          <Link to="/notices">공지사항</Link>
        </BtnList>
        <BtnList>
          <Link to="/rooms">회의실 예약</Link>
        </BtnList>
        <BtnList>
          <Link to="/minutes">회의록작성</Link>
        </BtnList>
        <BtnList>
          <Link to="/users">마이페이지</Link>
        </BtnList>
      </BtnContainer>
    </MainContainer>
  );
};

// commit test 입니다.
// 2021-10-20 3:55

export default Header;
