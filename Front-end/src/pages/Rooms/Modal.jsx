import React,{useState,useContext} from 'react';
import styled from 'styled-components';
import {ShowBox} from '../../pages/Rooms/index';

const Modalcon = styled.div `
    position: fixed;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
    background: #fff;
    width: 80%;
    height: auto;
    max-width: 800px;
    min-width: 500px;
    box-sizing:border-box;
    padding: 30px;
    border-radius: 13px;
    display: none;
`;
const Modalbg = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(000,000,000,0.5);
    display: none;
`;
const Buttondiv = styled.div `
  
 text-align: right;
`;
const Xbtn = styled.button `
    background: none;
    border: none;
    width : 35px;
    cursor: pointer;
    img{
        width: 100%;
    }
`;
const Imgwrap = styled.div `
    text-align: center;
    margin-bottom: 20px;
 
`;
const Modalimg = styled.img `
    max-width: 250px;
    border-radius: 13px;
`;
const Inputcon = styled.div`
    box-sizing:border-box;
    padding: 20px 20px 5px;
    background: #EBE2E2;
    border-radius: 13px;
`;
const Inputbox = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
`;
const Modallabel = styled.label `
    margin: 0 20px;
    width: 20%;
    text-align: right;
    font-size: 15px;
`;
const Modalp = styled.p `


`;
const ModalselectCon = styled.div `
    width: 70%;

`;
const Modalselect = styled.select `
    width: 30%;
    border: none;
    border-radius: 13px;
    font-size: 18px;
    margin-right: 20px;
    :nth-of-type(2){
        margin-left: 20px;
    }
    text-align: center;
    outline: none;
`;
const Modaloption = styled.option `


`;
const Modalinput = styled.input `
    background: #B4A8A8;
    outline: none;
    border: none;
    width: 70%;
    border-radius: 13px;
    font-size: 16px;
    padding: 5px 0;
    text-indent: 15px;
`;

const Modaltextarea = styled.textarea `
    background: #DDD3D3;
    border: none;
    width: 70%;
    padding: 10px 0;
    max-width: 70%;
    max-height: 100px;
`;
const Datebox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70%;
`;
const DateP = styled.p`
    font-size: 15px;
    :nth-of-type(1){
        margin-left: 10px;
    }
`;

const Buttoncon = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;
const ButtonSt = styled.div`
    width: 45%;
    text-align: center;
    cursor: pointer;
    border: none;
    font-size: 18px;
    color: #fff;
    padding: 5px 0;
    border-radius: 13px;
    :nth-of-type(1){background:#46C13C}
    :nth-of-type(2){background:#F94B25}
`;


const Modal = () => {
    

    const {showModal,setShowModal} = useContext(ShowBox)

    const closeModal = () => {
        setShowModal('none')
    }
    return (
        <>
            <Modalbg onClick = {closeModal} style={{display:showModal}}/>
            <Modalcon style={{display:showModal}}>
                <Buttondiv>
                    <Xbtn onClick = {closeModal}><img src='/assets/image/x-button.png'/></Xbtn>
                </Buttondiv>
                <Imgwrap>
                    <Modalimg src='/assets/image/room1.jpg'/>
                </Imgwrap>
                
                    <form>
                        <Inputcon>
                            <Inputbox>
                                <Modallabel>회의 제목 :</Modallabel><Modalinput></Modalinput>
                            </Inputbox>

                            <Inputbox>
                                <Modallabel>회의실 :</Modallabel><Modalp>New York</Modalp>
                            </Inputbox>
                            <Inputbox>
                                <Modallabel>예약자 :</Modallabel><Modalinput></Modalinput>
                            </Inputbox>
                            <Inputbox>
                                <Modallabel>참석인원 :</Modallabel><Modalinput></Modalinput>
                            </Inputbox>
                            <Inputbox>
                                <Modallabel>예약시간 :</Modallabel>
                                <ModalselectCon>
                                    <Modalselect>
                                        <Modaloption>1</Modaloption>
                                    </Modalselect>
                                    ~
                                    <Modalselect>
                                        <Modaloption>2</Modaloption>
                                    </Modalselect>
                                </ModalselectCon>
                            </Inputbox>
                            <Inputbox>
                                <Modallabel>회의실 :</Modallabel><Modaltextarea></Modaltextarea>
                            </Inputbox>
                            <Inputbox>
                                <Modallabel>메일 수신 :</Modallabel>
                                <Datebox>
                                    <div style={{display:'flex'}}>
                                        <input type="checkbox" />
                                        <DateP>수신동의</DateP>
                                    </div>
                                    <DateP>회의날짜 :  2021-10-14</DateP>
                                </Datebox>
                            </Inputbox>
                        </Inputcon>
                        <Buttoncon>
                            <ButtonSt>예약하기</ButtonSt>
                            <ButtonSt onClick = {closeModal}>돌아가기</ButtonSt>
                        </Buttoncon>
                    </form>
                
            </Modalcon>
        </>
    )
}

export default Modal
