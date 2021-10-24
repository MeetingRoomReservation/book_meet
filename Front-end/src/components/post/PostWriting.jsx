import React, { useState } from 'react';
import PostBtn from '@components/post/PostBtn';
import {
  NoticeContainer,
  TitleContainer,
  TitleLabel,
  Input,
  ContentContainer,
  Textarea,
} from '@components/post/styles';
import { Link } from 'react-router-dom';

const PostWriting = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(title, content);
    // axios.post('notices/writing', { title, contnet})
  };

  return (
    <NoticeContainer>
      <form onSubmit={onSubmit}>
        <TitleContainer>
          <TitleLabel htmlFor="title">제목</TitleLabel>
          <Input type="text" id="title" name="title" value={title} onChange={onChangeTitle} />
        </TitleContainer>
        <ContentContainer>
          <Textarea rows="20" cols="50" id="cotnent" name="content" value={content} onChange={onChangeContent} />
        </ContentContainer>
        <Link to="/notices">
          <PostBtn size="md">취소</PostBtn>
        </Link>
        <PostBtn size="md">작성하기</PostBtn>
      </form>
    </NoticeContainer>
  );
};

export default PostWriting;
