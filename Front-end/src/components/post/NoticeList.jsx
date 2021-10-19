import React from 'react';
import Table from '@components/table/Table';

const NoticeList = () => {
  const columns = ['번호', '제목', '작성자', '첨부파일', '회의일'];
  const data = [
    {
      id: 1,
      title: '합병에 따른 개인(신용)정보 이전 안내',
      writer: 'Admin',
      is_attach: true,
      meetingday: '2018.04.25',
      url: '/',
    },
    {
      id: 0,
      title: '개인정보 처리 방침 변경 안내',
      writer: 'Admin',
      is_attach: false,
      meetingday: '2017.09.18',
      url: '/',
    },
  ];

  return <Table columns={columns} data={data} />;
};

export default NoticeList;
