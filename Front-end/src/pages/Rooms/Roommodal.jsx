import React,{useState,useEffect,useContext} from 'react';
import styled from 'styled-components';
import {ShowBox} from '../../pages/Rooms/index';

const ModalCon = styled.div`
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    min-width: 500px;
    max-width: 1000px;
    display: none;
`;

const Modalwrap = styled.div`
    background: rgba(4, 15, 52, 0.57);
    border-radius: 20px 20px 0 0;
    box-sizing: border-box;
    padding: 20px;
`;
const Modalinfo = styled.div`
    display: flex;
    justify-content: space-between;
    color: #fff;
    align-items: center;
    padding: 0px 0 20px;
`;
const Modalinfop = styled.p`
    font-size: 17px;
    span{
        margin-left: 20px;
    }
`;
const Modalinfobutton = styled.button`
    background: none;
    border: none;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
`;
const Modaltime = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Modalitem = styled.span`
    background: #fff;
    font-size: 14px;
    width: 8%;
    text-align: center;
    padding: 10px 0;
    cursor: pointer;
`;



// ------active 관련 style---
// const activModal = {
//     display : "block"
// }

// const select = {
//     background : "#5EB550",
//     color:"#fff"
    
// }
// const roomOut = {
//     background: "#6F6D69",
//     color:"#fff"
// }

// ---------------------------
const times = ['09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00'];

const Roommodal = ({data,activeModal}) => {
    
    
    // const noneTimes = ['09:00','14:00','11:00','12:00','15:00'];

    // 이미 예약된 회의실 표시하고 선택 못하게 막아야함

    const {setShowModal,setShowTime} = useContext(ShowBox);
//--------------------------------------------------------------
    const [txtStatus,setTxtStatus] = useState([]);
    const [status,setStatus] = useState([]);
    const [timeStatus,timeSetStatus] = useState();
//--------------------------------------------------------------


//------------------------선택시간--------------------------------------
    useEffect(() => {

    },[timeStatus,status])
 
    useEffect(() => {
        status.sort((a,b) => {
            return a - b;
        })
       let result = times.filter((c,index) => {
            return index === status[0] || index === status[1]
        })
        setShowTime(result); //["11:00","12:00"]
        let txt = result[0] === undefined ? '시간을 선택해주세요.' : result[1] === undefined ? `${result[0]}` : `${result[0]} ~ ${result[1]}`;
        setTxtStatus(txt)
        let timer = status[0] === undefined ? '0' :  status.length === 1 ? '1' : status[1] - status[0] + 1;
        timeSetStatus(timer)
     
    },[status])
    

//---status 값이 변할 때 현 배열과 시간을 비교 후 txtStatus 업데이트---
   

//--------------------------------------------------------------
    const newSelect = (e) => {
        const targetDom = e.currentTarget;
        const target = e.currentTarget.dataset.id;
        
        if(status.length <= 1 ){
            setStatus([...status,Number(target)])
               
            targetDom.style.background = "#5EB550";
            targetDom.style.color = "#fff";
        }
    }   
//----------시간 선택 및 데이터 스테이트에 값 올리기-----------

// 전체 관리 하는 state 선택시 true 값을 같이 넘기기 

//--------------------------------------------------------------

    const timeItem = document.getElementsByClassName('item');

    const resetTime = () => {
        
        setStatus([]);
        
        for(let i = 0 ; i < timeItem.length;i++){
            timeItem[i].style.backgroundColor = "#ffffff";
            timeItem[i].style.color = "#000"
        }
      
    }

//-------------------시간 박스 초기화---------------------------

//--------------------------------------------------------------

const showModalEvent = () => {
    if(status.length >= 1){
        setShowModal('block');
    }else{
        alert('시간을 선택해주세요');
    }
}

//---------------------확인 후 예약 모달 띄우기--------------------------
    return (
    <>  
        <ModalCon style={{display:activeModal}}>
            <Modalwrap>
                <Modalinfo>
                   <Modalinfop>{data === undefined? '준비중' : data.country}<span>이용시간 : {txtStatus} ({timeStatus}시간)</span></Modalinfop> 
                   <Modalinfobutton onClick={resetTime}>재설정</Modalinfobutton>
                   <Modalinfobutton onClick={showModalEvent}>확인</Modalinfobutton>
                </Modalinfo>
                <Modaltime>
                    {
                        times.map((c,index) => {
                            return  (
                                <Modalitem className="item" key = {index} data-id = {index} onClick={newSelect}>{c}</Modalitem>
                            )
                        })
                    }
                </Modaltime>
            </Modalwrap>
        </ModalCon>
    </>
  );
};



export default Roommodal;
