import React, { useState, useEffect } from 'react';
import Table from '@components/table/Table';
import Pagination from '@components/post/Pagination';
import PostBtn from '@components/post/PostBtn';
import { NoticeContainer, LinkBtn } from '@components/post/styles';

const NoticeList = () => {
  const columns = ['번호', '제목', '첨부파일', '회의일'];

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  // current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    setPosts([
      {
        id: 11,
        title: '합병에 따른 개인(신용)정보 이전 안내',
        is_attach: true,
        meetingday: '2018.04.25',
      },
      {
        id: 10,
        title: '개인정보 처리 방침 변경 안내',
        is_attach: false,
        meetingday: '2017.09.18',
      },
      {
        id: 9,
        title: '합병에 따른 개인(신용)정보 이전 안내',
        is_attach: true,
        meetingday: '2018.04.25',
      },
      {
        id: 8,
        title: '개인정보 처리 방침 변경 안내',
        is_attach: false,
        meetingday: '2017.09.18',
      },
      {
        id: 7,
        title: '합병에 따른 개인(신용)정보 이전 안내',
        is_attach: true,
        meetingday: '2018.04.25',
      },
      {
        id: 6,
        title: '개인정보 처리 방침 변경 안내',
        is_attach: false,
        meetingday: '2017.09.18',
      },
      {
        id: 5,
        title: '합병에 따른 개인(신용)정보 이전 안내',
        is_attach: true,
        meetingday: '2018.04.25',
      },
      {
        id: 4,
        title: '개인정보 처리 방침 변경 안내',
        is_attach: false,
        meetingday: '2017.09.18',
      },
      {
        id: 3,
        title: '합병에 따른 개인(신용)정보 이전 안내',
        is_attach: true,
        meetingday: '2018.04.25',
      },
      {
        id: 2,
        title: '개인정보 처리 방침 변경 안내',
        is_attach: false,
        meetingday: '2017.09.18',
      },
      {
        id: 1,
        title: '합병에 따른 개인(신용)정보 이전 안내',
        is_attach: true,
        meetingday: '2018.04.25',
      },
      {
        id: 0,
        title: '개인정보 처리 방침 변경 안내',
        is_attach: false,
        meetingday: '2017.09.18',
      },
    ]);
  }, []);

  return (
    <NoticeContainer>
      <div style={{ background: '#eee', width: '100%', height: '30px', margin: '0 0 30px 0' }}>Search</div>
      <Table columns={columns} data={currentPosts} />
      <div style={{ display: 'flex' }}>
        <LinkBtn to="/notices/writing">작성하기</LinkBtn>
        <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} />
      </div>
    </NoticeContainer>
  );
};

export default NoticeList;
