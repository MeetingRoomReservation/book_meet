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

const onSubmit = (event) => {
  event.preventDefault();
};

const Minutes = () => {
  return (
    <>
      <ContainerWrap>
        <h2 style={{ fontSize: '25px', fontWeight: 'bold', padding: '20px 0' }}>회의록 작성</h2>
        <Container>
          <form onSubmit={onSubmit} style={{ width: '100%' }}>
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
              <div style={{ width: '100%', textAlign: 'center' }}>
                <InputText type="text" className="content"></InputText>
              </div>
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
              <Select name="team" style={{ fontSize: '13px' }}>
                <option value="경영지원팀">경영지원팀</option>
                <option value="영업팀">영업팀</option>
                <option value="인사팀">인사팀</option>
              </Select>
            </SpanDiv>
          </form>
        </Container>
        <div
          style={{
            width: '80%',
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '20px',
            maxWidth: '800px',
          }}
        >
          <Link to="/minutes" style={{ width: '45%' }}>
            <ButtonConfirm type="submit">작성하기</ButtonConfirm>
          </Link>
          <Link to="/minutes" style={{ width: '45%' }}>
            <ButtonCancel type="submit">취소</ButtonCancel>
          </Link>
        </div>
      </ContainerWrap>
    </>
  );
};

//git test

export default Minutes;
