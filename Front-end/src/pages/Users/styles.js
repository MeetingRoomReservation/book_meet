import styled from 'styled-components';

export const SAMainContainer = styled.div`
  width: auto;
  margin-left: 200px;
`;
export const SASubContainer = styled.div`
  display: flex;
  width: 90%;
  max-width: 1000px;
  margin: 25px auto;
`;
export const DatePickerBox = styled.select`
  border-radius: 20px;
  border: none;
  text-align: center;
  background-color: #ccc;
  font-size: 16px;
  height: 35px;
  margin-right: 20px;
  width: 100px;
`;
export const SelectBox = styled.select`
  border-radius: 20px;
  border: none;
  text-align: center;
  background-color: #ccc;
  font-size: 16px;
  height: 35px;
  margin-right: 20px;
  width: 100px;
`;
export const SearchBox = styled.input`
  border: none;
  border-radius: 25px;
  text-align: center;
  background-color: #ccc;
  font-size: 16px;
  height: 35px;
  margin-right: 20px;
  width: 280px;
`;

export const SearchBtn = styled.button`
  border-radius: 20px;
  border: none;
  background-color: #162936;
  font-size: 16px;
  height: 35px;
  width: 85px;
  color: #fff;
`;
export const IconSize = '2x';

export const MainContainer = styled.div`
  width: auto;
  margin-left: 200px;
`;

export const SubContainer = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
`;

export const OverviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const DateContainer = styled.div`
  font-size: 30px;
  margin-top: 40px;
`;

export const OverviewBox = styled.div`
  display: flex;
  width: 48%;
  height: 105px;
  background-color: lightgray;
  border-radius: 10px;
  margin-top: 15px;
  font-size: 16px;
`;

export const OverviewBoxDetails = styled.div`
  font-size: 16px;
  width: 90%;
`;

export const P = styled.p`
  margin: 15px 15px;
`;

export const DetailedContainer = styled.div`
  display: flex;
  width: 100%;
  border-radius: 10px;
  margin-top: 15px;
  font-size: 16px;
  background-color: #344551;
  height: 200px;
`;

export const SidebarContainer = styled.div`
  width: 30%;
  border-radius: 10px;
  background-color: #162936;
  color: #fff;
  text-align: center;
`;

export const OverviewBoxIcon = styled.div`
  display: flex;
  align-items: center;
  &:hover ${DetailedContainer} {
    background-color: red;
  }
`;

export const PDetailedSidebar = styled.p`
  width: 100%;
  margin-bottom: 10px;
`;

export const PDetailedInfo = styled.p`
  margin-bottom: 10px;
  width: 100%;
`;

export const DetailedContainer2 = styled.div`
  width: 70%;
`;

export const DetailedContainerSidebar = styled.div`
  margin-top: 15px;
`;

export const DetailedContainerInfo = styled.div`
  margin-top: 15px;
  text-align: center;
  color: #fff;
  border-radius: 10px;
`;
