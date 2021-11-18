import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SideContainer = styled.div`
  width: 250px;
  height: calc(100vh - 86px);
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: #162936;
  color: white;
  font-size: 20px;
  align-items: center;
`;

const SideDiv = styled.div`
  margin-top: 50px;
`;

const SideBar = () => {
  return (
    <SideContainer>
      <SideDiv>
        <Link to="/users">회의 예약 현황</Link>
      </SideDiv>
      <SideDiv>
        <Link to="/users/minutes">회의록 현황</Link>
      </SideDiv>
      <SideDiv>
        <Link to="/users/modify">개인정보 수정</Link>
      </SideDiv>
    </SideContainer>
  );
};

export default SideBar;
