import React from 'react';
import styled from 'styled-components';

const ModalCon = styled.div`
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    min-width: 500px;
    max-width: 1000px;
    
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
    font-size: 15px;
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

const select = {
    background : "#5EB550",
    color:"#fff"
    
}
const roomOut = {
    background: "#6F6D69",
    color:"#fff"
}
const Roommodal = () => {

    const times = ['09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00'];
    
    return (
    <>  
        <ModalCon>
            <Modalwrap>
                <Modalinfo>
                   <Modalinfop>회의실 tokyo <span>이용시간 : 13:00 ~ 15:00 (2시간)</span></Modalinfop> 
                   <Modalinfobutton>확인</Modalinfobutton>
                </Modalinfo>
                <Modaltime>
                {/* {
                    times.map((c,index) => {
                        return  <Modalitem key = {index}>{c}</Modalitem>
                    })
                       
                } */}
                <Modalitem>09:00</Modalitem>
                <Modalitem style={roomOut}>10:00</Modalitem>
                <Modalitem style={roomOut}>11:00</Modalitem>
                <Modalitem>12:00</Modalitem>
                <Modalitem>13:00</Modalitem>
                <Modalitem style={select}>14:00</Modalitem>
                <Modalitem style={select}>15:00</Modalitem>
                <Modalitem>16:00</Modalitem>
                <Modalitem>17:00</Modalitem>
                <Modalitem>18:00</Modalitem>
                </Modaltime>
            </Modalwrap>
        </ModalCon>
    </>
  );
};



export default Roommodal;
