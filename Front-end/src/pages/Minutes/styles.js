import styled from 'styled-components';

export const ContainerWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  border-radius: 20px;
  width: 80%;
  height: auto;
  background-color: #162936;
  padding: 30px 0 10px;
  justify-content: center;
  align-items: center;
  max-width: 800px;
`;

export const Span = styled.span`
  color: white;
  font-size: 18px;
  width: 20%;
  margin:0 0 0 5%;
  display: inline-block;
  text-align: left;
`;

export const InputText = styled.textarea`
  width: 90%;
  border-radius: 20px;
  height: 50vh;
  max-height: 180px;
    ::-webkit-scrollbar {
        width:6px;
        margin-right: 10px;
    }
    ::-webkit-scrollbar-thumb{
      background: #000;
      width: 10px;
      height: 5px;
      border-radius: 20px;
    }
    ::-webkit-scrollbar-track{
      background: #fff;
      
    }
`;

export const InputLeft = styled.input`
  width: 70%;
  border-radius: 20px;
  font-size: 16px;
  padding: 5px 0;
  text-indent: 20px;
 
`;

export const ContentDiv = styled.div`
  color: white;
  width: 20%;
  margin: 0 0 20px 5%;
  font-size: 18px;
 
`;

// const ButtonContainer = styled.div`
//   display: flex;
//   width: 1120px;
//   justify-content: space-between;
// `;

// 320px iphone5

export const InputLeftP = styled.input`
  width: 700px;
  height: 50px;
  border-radius: 20px;
  background-color: #c9c2c2;
`;

export const SpanDiv = styled.div`
  margin-bottom: 15px;
  font-size: 20px;
`;

export const ButtonConfirm = styled.button`
  background-color: #344551;
  border: none;
  border-radius: 50px;
  color: white;
  /* padding: 15px 150px; */
  width: 100%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  padding: 5px 0;
  :hover {
    background-color: #162936;
  }
  font-size: 20px;
  cursor: pointer;
`;

export const ButtonCancel = styled.button`
  background-color: #344551;
  border: none;
  border-radius: 50px;
  color: white;
  width: 100%;
  /* padding: 15px 150px; */
  text-align: center;
  text-decoration: none;
  display: inline-block;
  :hover {
    background-color: #162936;
  }
  font-size: 20px;
  padding: 5px 0;
  cursor: pointer;
`;

export const Label = styled.label`
  color: white;
  margin-right: 15px;
  font-size: 16px;
`;

export const Select = styled.select`
  border-radius: 20px;
  width: 20%;
  height: 30px;
  text-align: center;
  max-width: 100px;
`;

export const InputCheck = styled.input`
  margin-right: 10px;
`;
