import React from 'react';
import loadable from '@loadable/component';
import {
  Container,
  MainBox,
  MainLeft,
  MainRight,
  MainTxt,
  MainTxt_,
  SideBox,
  SideCard,
  SideContainer,
  SideNoP,
  SideText,
  SideTitle,
} from './styles';

const Header = loadable(() => import('@components/Header.js'));

const Main = () => {
  
  return (
    <>
      <Header />
      <Container>
        <MainLeft>
          <MainBox>
            <MainTxt>회의실의 문화를</MainTxt>
            <MainTxt_>바꾼다.</MainTxt_>
          </MainBox>
        </MainLeft>
        <MainRight>
          <SideContainer>
            <SideCard>
              <SideTitle>
                오늘의 회의<span>더보기</span>
              </SideTitle>
              <SideBox>
                <SideText>데일리 스탠드업</SideText>
                <SideText>10시 30분 ~ 10시 40분</SideText>
                <SideText>알렉스줌</SideText>
              </SideBox>
            </SideCard>
            <SideCard>
              <SideTitle>
                이번주 회의<span>더보기</span>
              </SideTitle>
              <SideBox>
                <SideNoP>이번주 회의가 없습니다.</SideNoP>
              </SideBox>
            </SideCard>
            <SideCard>
              <SideTitle>
                공지사항<span>더보기</span>
              </SideTitle>
              <SideBox>
                <SideText>서비스 점검</SideText>
                <SideText>10시 30분 ~ 10시 40분 점검</SideText>
              </SideBox>
            </SideCard>
          </SideContainer>
        </MainRight>
      </Container>
    </>
  );
};

export default Main;
