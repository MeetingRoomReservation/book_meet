import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NoticeContainer = styled.div`
  width: 65vw;
  margin: 0 auto;
  padding: 40px 0;
  position: relative;
`;

export const PageNav = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const PageUl = styled.ul`
  display: flex;
  line-height: 45px;
  text-align: center;
  font-size: 16px;
`;

export const PageLi = styled.li`
  width: 20%;
  height: 40px;
  transition: all 0.3s ease;
  margin: 0 10px;
  cursor: pointer;
  &:hover {
    font-weight: bold;
    background: #eee;
    border-radius: 2em;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  vertical-align: center;
  margin-bottom: 40px;
  flex-wrap: nowrap;
  height: 50px;
  align-items: center;
`;

export const TitleLabel = styled.label`
  display: inline-block;
  font-size: 28px;
  line-height: 50px;
  text-align: center;
  font-weight: bold;
  width: 15%;
  letter-spacing: 0.2rem;
  border-bottom: 2px solid silver;
  height: 100%;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  border-bottom: 2px solid silver;
  font-size: 20px;
  color: #999;
  padding: 10px 0;
  font-family: 'NanumSquare', sans-serif;
`;

export const ContentContainer = styled.div`
  margin-bottom: 20px;
`;

export const Textarea = styled.textarea`
  resize: none;
  width: 100%;
  border: none;
  border-radius: 10px;
  background: #e2f1f8;
  padding: 20px;
  font-size: 1.2rem;
  font-family: 'NanumSquare', sans-serif;
  color: #888;
`;

export const LinkBtn = styled(Link)`
  position: absolute;
  background: #294050;
  color: #fff;
  padding: 5px;
  border: none;
  border-radius: 2em;
  width: 15%;
  height: 35px;
  text-align: center;
  line-height: 30px;
`;
