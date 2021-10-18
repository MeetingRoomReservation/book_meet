import React from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  max-width: 100%;
  padding: 20px;
  color: white;
  background-color: #344551;
`;

const Title = styled.div`
  font-size: 35px;
`;

const BtnContainer = styled.div`
  margin: 10px;
`;

const BtnList = styled.span`
  padding: 10px;
`;

const Header = () => {
  return (
    <MainContainer>
      <Title>
        <Link to="/main">회의 관리 시스템</Link>
      </Title>
      <BtnContainer>
        <BtnList>
          <Link to="/users">마이페이지</Link>
        </BtnList>
        <BtnList>
          <Link to="/rooms">회의실</Link>
        </BtnList>
        <BtnList>
          <Link to="/minutes">회의록</Link>
        </BtnList>
        <BtnList>
          <Link to="/">로그아웃</Link>
        </BtnList>
      </BtnContainer>
    </MainContainer>
  );
};

// commit test

export default Header;
