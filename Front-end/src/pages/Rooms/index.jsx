import React from 'react';
import loadable from '@loadable/component';
import {Roomspan,Roomwrap,Info,Selectdata,Optiondata,Container,Datedata,Datacon,Btnsubmit,Roomcon,Roomcard,Roomimg,Roomp} from './styles';
const Header = loadable(() => import('@components/Header.js'));
const Roommodal = loadable(() => import('@components/Roommodal.js'));


const index = () => {
  const active = {
    border: '5px solid #FF9E0D',
  }

  
  

 
  return (
    <>
      <Header/>
      <Container>
        <Info>회의실 이용 관련 유의사항: 회의실 예약 후 시간은 변경 가능하나, 회의실 변경은 불가합니다.</Info>
        <Datacon>
          <form action="" style={{display:'flex',alignItems:'center'}}>
            <Selectdata>
              <Optiondata>서울</Optiondata>
              <Optiondata>제주도</Optiondata>
            </Selectdata>
            <Datedata type='date'/>
            <Selectdata>
              <Optiondata>13시</Optiondata>
              <Optiondata>14시</Optiondata>
            </Selectdata>
            <Btnsubmit>조회</Btnsubmit>
          </form>
        </Datacon>
        <Roomcon>
            <Roomwrap>
              <Roomcard  style={active}>
                <Roomimg src='/assets/image/room.jpg'/>
                <Roomp>Tokyo</Roomp>
                <Roomspan>위치 : 본관 1 층</Roomspan>
                <Roomspan>이용인원 : 4 ~ 5명</Roomspan>
              </Roomcard>
              <Roomcard >
                <Roomimg src='/assets/image/room.jpg'/>
                <Roomp>NewYork</Roomp>
                <Roomspan>위치 : 본관 1 층</Roomspan>
                <Roomspan>이용인원 : 4 ~ 5명</Roomspan>
              </Roomcard>
              <Roomcard >
                <Roomimg src='/assets/image/room.jpg'/>
                <Roomp>Tokyo</Roomp>
                <Roomspan>위치 : 본관 1 층</Roomspan>
                <Roomspan>이용인원 : 4 ~ 5명</Roomspan>
              </Roomcard>
            </Roomwrap>
            <Roomwrap>
              <Roomcard >
                <Roomimg src='/assets/image/room.jpg'/>
                <Roomp>Tokyo</Roomp>
                <Roomspan>위치 : 본관 1 층</Roomspan>
                <Roomspan>이용인원 : 4 ~ 5명</Roomspan>
              </Roomcard>
              <Roomcard >
                <Roomimg src='/assets/image/room.jpg'/>
                <Roomp>NewYork</Roomp>
                <Roomspan>위치 : 본관 1 층</Roomspan>
                <Roomspan>이용인원 : 4 ~ 5명</Roomspan>
              </Roomcard>
              <Roomcard >
                <Roomimg src='/assets/image/room.jpg'/>
                <Roomp>Tokyo</Roomp>
                <Roomspan>위치 : 본관 1 층</Roomspan>
                <Roomspan>이용인원 : 4 ~ 5명</Roomspan>
              </Roomcard>
            </Roomwrap>
        </Roomcon>
        <Roommodal/>
      </Container>
    </>
  );
};

export default index;
