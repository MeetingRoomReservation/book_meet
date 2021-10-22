import styled from 'styled-components';

export const Info = styled.p`
    background: #486B84;
    color: #fff;
    text-align: center;
    padding: 15px 0;
    font-size: 15px;
`;

export const Container = styled.div`
    background: #C5D2D8;
    width: 85%;
    margin: 0 auto;
    min-width: 1000px;
    padding: 0px 0 120px;
`;


export const Selectdata = styled.select`
    background: #fff;
    border: none;
    box-sizing: border-box;
    padding: 3px;
    width: 100px;
    text-align: center;
    border-radius: 20px;
    font-size: 15px;
    outline: none;
`;

export const Optiondata = styled.option`
`;

export const Datedata = styled.input`
    background: #fff;
    border: none;
    box-sizing: border-box;
    padding: 3px;
    width: 130px;
    text-align: center;
    border-radius: 20px;
    font-size: 13px;
    outline: none;
    margin: 0 10px;
`;
export const Btnsubmit = styled.button`
    margin-left:10px;
    outline: none;
    background: #242119;
    color: #fff;
    border: none;
    padding: 10px 35px;
    border-radius: 10px;
    font-size: 15px;
    cursor: pointer;
`;
export const Datacon = styled.div`
    width: 100%;    
    display: flex;
    justify-content: center;
    padding: 20px 0;
    align-items: center;
`;

export const Roomcon = styled.div`
height: auto;
`;

export const Roomwrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 40px;
    flex-wrap: wrap;
`;

export const Roomcard = styled.div`
    margin:0 auto 0px;
    max-width: 250px;
    border-radius: 25px;
    overflow: hidden;
    background: #fff;
    padding: 0 0 5px 0;
    border : 5px solid #fff;
    cursor: pointer;
    :hover{
        border : 5px solid #FF9E0D
    }
  
`;

export const Cardbox = styled.div`
     width: 33.333%;
     margin: 0 0 30px;
   
`;

export const Roomimg = styled.img`
    width: 100%;
`;

export const Roomp = styled.p`
    font-size: 25px;
    text-align: center;
    font-weight: bold;
    padding: 10px 0;
`;

export const Roomspan = styled.span`
    font-size: 15px;
    text-align: center;
    padding: 10px 0;
    display: inline-block;
    width: 100%;
    text-align: center;
    color: #807B7B;
`;

