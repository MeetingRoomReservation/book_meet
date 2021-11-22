import React, { useState } from 'react';
import { NoticeContainer } from '@components/post/styles';
import { useHistory } from 'react-router';
import { Button } from 'antd';

const PostView = ({ location }) => {
  const { title, data } = location.state;
  const { attach, date } = data;
  const history = useHistory();

  const onClickBack = () => {
    history.push('/notices');
  };

  return (
    <NoticeContainer>
      <h2 style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '1em', textAlign: 'center' }}>공지사항</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '1em',
          borderBottom: '2px solid #aaa',
          borderTop: '2px solid #aaa',
          alignContent: 'center',
        }}
      >
        <h2 style={{ fontSize: '1.5em', fontWeight: 'bold' }}>{title}</h2>
        <span style={{ lineHeight: '1.5em' }}>{date}</span>
      </div>
      <div style={{ margin: '1em 0', padding: '1em' }}>
        <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
          into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
          of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={onClickBack}>목록</Button>
      </div>
    </NoticeContainer>
  );
};

export default PostView;
