import React from 'react';
import { Link } from 'react-router-dom';
import loadable from '@loadable/component';
import {
  ButtonCancel,
  ButtonConfirm,
  Container,
  ContainerWrap,
  ContentDiv,
  InputCheck,
  InputLeft,
  InputText,
  Label,
  Span,
  Select,
  SpanDiv,
  SpanP,
  InputLeftP,
} from './styles';
const Header = loadable(() => import('@components/Header.js'));

const onSubmit = (event) => {
  event.preventDefault();
};

const Minutes = () => {
  return (
    <>
      <Header />
      <ContainerWrap>
        <Container>
          <form onSubmit={onSubmit}>
            <SpanDiv>
              <Span>회의 일자</Span>
              <InputLeft type="date" className="date"></InputLeft>
            </SpanDiv>
            <SpanDiv>
              <Span>회의 제목</Span>
              <InputLeft placeholder="제목을 입력하세요" type="text" maxLength="10" required></InputLeft>
            </SpanDiv>
            <SpanDiv>
              <Span>참석자</Span>
              <InputLeft readOnly type="text" className="member"></InputLeft>
            </SpanDiv>
            <SpanDiv>
              <ContentDiv>내용</ContentDiv>
              <InputText type="text" className="content"></InputText>
            </SpanDiv>
            <SpanDiv>
              <Span>읽기 권한</Span>
              <InputCheck type="checkbox" name="name1"></InputCheck>
              <Label>
                {/* <Label for="name1" style="color:red;"> */}
                회의참석자
              </Label>
              <InputCheck type="checkbox" name="name2"></InputCheck>
              <Label for="name2">비공개</Label>
              <InputCheck type="checkbox" name="name1"></InputCheck>
              <Select name="team">
                <option value="경영지원팀">경영지원팀</option>
                <option value="영업팀">영업팀</option>
                <option value="인사팀">인사팀</option>
              </Select>
            </SpanDiv>
          </form>
        </Container>
        <div>
          <Link to="/minutes">
            <ButtonConfirm type="submit">작성하기</ButtonConfirm>
          </Link>
          <Link to="/minutes">
            <ButtonCancel type="submit">취소</ButtonCancel>
          </Link>
        </div>
      </ContainerWrap>
    </>
  );
};

//git test

export default Minutes;
