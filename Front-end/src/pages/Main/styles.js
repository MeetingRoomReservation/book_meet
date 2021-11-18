import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 100%;
  height: calc(100vh - 86px);
`;

export const MainLeft = styled.div`
  background-image: url('/assets/image/room2.jpg');
  background-repeat: no-repeat;
  background-position-x: right 20%;
  background-size: cover;
  width: 60%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

export const MainBox = styled.div`
  width: 400px;
  height: 400px;
  background-color: rgba(000, 000, 000, 0.3);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const MainTxt = styled.p`
  font-size: 50px;
  color: white;
  text-align: center;
  margin: 120px auto 70px;
`;
export const MainTxt_ = styled.p`
  font-size: 50px;
  color: #f27630;
  text-align: center;
`;

export const MainRight = styled.div`
  width: 40%;
  height: 100%;
`;

export const SideContainer = styled.div`
  width: 100%;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

export const SideCard = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const SideBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 110px;
  background-color: #ccc;
  border-radius: 20px;
  margin-top: 10px;
  margin-bottom: 30px;
  text-align: left;
  font-size: 1.2vw;
  padding: 5px 10px;
`;

export const SideText = styled.p`
  margin-top: 10px;
`;

export const SideTitle = styled.p`
  width: 100%;
  font-size: 20px;
  span {
    float: right;
    color: blue;
    font-size: 15px;
  }
`;

export const SideNoP = styled.p`
  font-size: 1em;
  text-align:center !important;
  margin-top: 40px;
`;
