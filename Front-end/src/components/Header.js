import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  max-width: 100%;
  min-width: 650px;
  padding: 25px;
  color: white;
  background-color: #344551;
  align-items: center;
  position: relative;
  z-index: 999;
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
const activeStyle = {
  color: '#ff9e0d',
};

const Header = () => {
  return (
    <MainContainer>
      <Title>
        <NavLink to="/">회의 관리 시스템</NavLink>
      </Title>
      <BtnContainer>
        <BtnList>
          <NavLink to="/notices" activeStyle={activeStyle}>
            공지사항
          </NavLink>
        </BtnList>
        <BtnList>
          <NavLink to="/rooms" activeStyle={activeStyle}>
            회의실 예약
          </NavLink>
        </BtnList>
        <BtnList>
          <NavLink to="/minutes" activeStyle={activeStyle}>
            회의록작성
          </NavLink>
        </BtnList>
        <BtnList>
          <NavLink exact to="/users" activeStyle={activeStyle}>
            마이페이지
          </NavLink>
        </BtnList>
      </BtnContainer>
    </MainContainer>
  );
};

export default Header;
