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
  width: 1120px;
  height: 630px;
  background-color: #162936;
  margin-top: 110px;
  margin-bottom: 40px;
  justify-content: center;
  align-items: center;
`;

export const Span = styled.span`
  color: white;
  margin-right: 30px;
  font-size: 20px;
`;

export const InputText = styled.input`
  line-height: 240px;
  width: 980px;
  border-radius: 20px;
`;

export const InputLeft = styled.input`
  width: 700px;
  height: 50px;
  border-radius: 20px;
`;

export const ContentDiv = styled.div`
  color: white;
  margin-bottom: 20px;
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
  padding: 15px 150px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  :hover {
    background-color: blue;
  }
  font-size: 16px;
  margin-right: 30px;
`;

export const ButtonCancel = styled.button`
  background-color: #344551;
  border: none;
  border-radius: 50px;
  color: white;
  padding: 15px 150px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  :hover {
    background-color: red;
  }
  font-size: 16px;
  margin-right: 30px;
`;

export const Label = styled.label`
  color: white;
  margin-right: 50px;
`;

export const Select = styled.select`
  border-radius: 20px;
  width: 100px;
  height: 30px;
  text-align: center;
`;

export const InputCheck = styled.input`
  margin-right: 15px;
`;
