import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import {
  DateContainer,
  DatePickerBox,
  DetailedContainer,
  DetailedContainer2,
  DetailedContainerInfo,
  DetailedContainerSidebar,
  IconSize,
  MainContainer,
  OverviewBox,
  OverviewBoxDetails,
  OverviewBoxIcon,
  OverviewContainer,
  P,
  PDetailedInfo,
  PDetailedSidebar,
  SAMainContainer,
  SASubContainer,
  SearchBox,
  SearchBtn,
  SelectBox,
  SidebarContainer,
  SubContainer,
} from '../../pages/Users/styles';

const MyPage = () => {
  const hoveredIcon = (event) => {
    console.log(event);
  };
  return (
    <>
      <SAMainContainer>
        <SASubContainer>
          <DatePickerBox name="weekday">
            <option value="day">일별보기</option>
            <option value="week">주별보기</option>
          </DatePickerBox>
          <SelectBox name="year">
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </SelectBox>
          <form>
            <SearchBox placeholder="검색" active></SearchBox>
            <SearchBtn>Search</SearchBtn>
          </form>
        </SASubContainer>
      </SAMainContainer>
      <MainContainer>
        <SubContainer>
          <DateContainer>9.20</DateContainer>
          <OverviewContainer>
            <OverviewBox>
              <OverviewBoxDetails>
                <P>데일리 스탠드업</P>
                <P>10시30분 ~ 10시40분</P>
                <P>알렉스줌</P>
              </OverviewBoxDetails>
              <OverviewBoxIcon onClick={hoveredIcon}>
                <FontAwesomeIcon icon={faChevronUp} size={IconSize} />
              </OverviewBoxIcon>
            </OverviewBox>
            <OverviewBox>
              <OverviewBoxDetails>
                <P>데일리 스탠드업</P>
                <P>10시30분 ~ 10시40분</P>
                <P>알렉스줌</P>
              </OverviewBoxDetails>
              <OverviewBoxIcon onClick={hoveredIcon}>
                <FontAwesomeIcon icon={faChevronDown} size={IconSize} />
              </OverviewBoxIcon>
            </OverviewBox>
          </OverviewContainer>
          <DetailedContainer>
            <SidebarContainer>
              <DetailedContainerSidebar>
                <PDetailedSidebar>제목</PDetailedSidebar>
                <PDetailedSidebar>회의실명</PDetailedSidebar>
                <PDetailedSidebar>회의실 위치</PDetailedSidebar>
                <PDetailedSidebar>예약자</PDetailedSidebar>
                <PDetailedSidebar>예약시간</PDetailedSidebar>
                <PDetailedSidebar>참석인원</PDetailedSidebar>
                <PDetailedSidebar>회의 내용</PDetailedSidebar>
              </DetailedContainerSidebar>
            </SidebarContainer>
            <DetailedContainer2>
              <DetailedContainerInfo>
                <PDetailedInfo>내부회의</PDetailedInfo>
                <PDetailedInfo>2회의실</PDetailedInfo>
                <PDetailedInfo>지하 1층</PDetailedInfo>
                <PDetailedInfo>일반회원</PDetailedInfo>
                <PDetailedInfo>2021-09-28 10:00 ~ 12:00</PDetailedInfo>
                <PDetailedInfo>5명</PDetailedInfo>
                <PDetailedInfo>배열에 대한 지식공유</PDetailedInfo>
              </DetailedContainerInfo>
            </DetailedContainer2>
          </DetailedContainer>
          <OverviewContainer>
            <OverviewBox>
              <OverviewBoxDetails>
                <P>데일리 스탠드업</P>
                <P>10시30분 ~ 10시40분</P>
                <P>알렉스줌</P>
              </OverviewBoxDetails>
              <OverviewBoxIcon onClick={hoveredIcon}>
                <FontAwesomeIcon icon={faChevronDown} size={IconSize} />
              </OverviewBoxIcon>
            </OverviewBox>
            <OverviewBox>
              <OverviewBoxDetails>
                <P>데일리 스탠드업</P>
                <P>10시30분 ~ 10시40분</P>
                <P>알렉스줌</P>
              </OverviewBoxDetails>
              <OverviewBoxIcon onClick={hoveredIcon}>
                <FontAwesomeIcon icon={faChevronDown} size={IconSize} />
              </OverviewBoxIcon>
            </OverviewBox>
          </OverviewContainer>
        </SubContainer>
      </MainContainer>
    </>
  );
};

export default MyPage;
