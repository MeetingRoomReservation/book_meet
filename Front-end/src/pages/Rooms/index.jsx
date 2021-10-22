import React,{createContext, useState,useRef} from 'react';
import loadable from '@loadable/component';
import {Cardbox,Roomspan,Roomwrap,Info,Selectdata,Optiondata,Container,Datedata,Datacon,Btnsubmit,Roomcon,Roomcard,Roomimg,Roomp} from './styles';
const Header = loadable(() => import('@components/Header.js'));
const Roommodal = loadable(() => import('./Roommodal.jsx'));
const Modal = loadable(() => import('./Modal.jsx'));
export const ShowBox = createContext();

const Index = () => {

 
  const dummy = [
    { 
      "id" : 1,
      "country" :"korea",
      "location" : "본관 1 층",
      "personnel" : "4명",
    },
    { 
      "id" : 2,
      "country" :"U.S.A",
      "location" : "본관 1 층",
      "personnel" : "4명"
    },
    { 
      "id" : 3,
      "country" :"England",
      "location" : "본관 1 층",
      "personnel" : "4명"
    },{
      "id" : 4,
      "country" :"France",
      "location" : "본관 1 층",
      "personnel" : "4명"
    },
    {
      "id" : 5,
      "country" :"korea",
      "location" : "본관 1 층",
      "personnel" : "4명"
    },
    { 
      "id" : 6,
      "country" :"korea",
      "location" : "본관 1 층",
      "personnel" : "4명"
    },
    {
      "id" : 5,
      "country" :"korea",
      "location" : "본관 1 층",
      "personnel" : "4명"
    },
    {
      "id" : 5,
      "country" :"korea",
      "location" : "본관 1 층",
      "personnel" : "4명"
    },
    {
      "id" : 5,
      "country" :"korea",
      "location" : "본관 1 층",
      "personnel" : "4명"
    }
  ]
 
  const countryData = useRef();
 

  const [data,setData] = useState();
  const [activeModal,setActiveModal] = useState();

  const cardInfo = (e) => {
     const id = e.currentTarget.dataset.id;
     const result =  dummy.filter((c)=>{
        return c.id === Number(id);
      })

      setData(result[0]);
     
  }

// 회의실 이름 가져와서 하단 modal에 넣어주기


// modal 확인 버튼을 누르면 새로운 모달 열림
const [showModal,setShowModal] = useState();
  return (
    <>
      <Header/>
      <Container>
        <Info>회의실 이용 관련 유의사항: 회의실 예약 후 시간은 변경 가능하나, 회의실 변경은 불가합니다.</Info>
        <Datacon>
          <form action="" style={{display:'flex',alignItems:'center'}} method='GET'>
            <Selectdata name='country' ref={countryData}>
              <Optiondata value = '서울'>서울</Optiondata>
              <Optiondata value = '제주도'>제주도</Optiondata>
            </Selectdata>
            <Datedata type='date' name='date'/>
            <Selectdata  type='date' name='time'>
              <Optiondata>13시</Optiondata>
              <Optiondata>14시</Optiondata>
            </Selectdata>
            <Btnsubmit>조회</Btnsubmit>
          </form>
        </Datacon>
        
        <Roomcon>
            <Roomwrap>
              {
                dummy.map((c) => {
                  return (
                    <Cardbox key = {c.id} onClick = {cardInfo} data-id = {c.id}>
                      <Roomcard onClick={() => {
                        setActiveModal('block')
                      }}>
                        <Roomimg src='/assets/image/room.jpg'/>
                        <Roomp>{c.country}</Roomp>
                        <Roomspan>{c.location}</Roomspan>
                        <Roomspan>{c.personnel}</Roomspan>
                      </Roomcard>
                    </Cardbox>
                  ) 
                })
              }
             
            </Roomwrap>
        </Roomcon>
        <ShowBox.Provider value={{showModal,setShowModal}}>
          <Roommodal data = {data} activeModal = {activeModal}/>
          <Modal/>
        </ShowBox.Provider>
      </Container>
    </>
  );
};

export default Index;
