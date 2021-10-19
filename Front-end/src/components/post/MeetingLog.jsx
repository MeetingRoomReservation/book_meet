import React from 'react';
import Table from '@components/table/Table';

const MeetingLog = () => {
  const columns = ['번호', '제목', '등록일'];
  const data = [
    {
      id: 1,
      title: '합병에 따른 개인(신용)정보 이전 안내',
      date: '2021.10.01',
      url: '/',
    },
    {
      id: 0,
      title: '개인정보 처리 방침 변경 안내',
      date: '2021.09.18',
      url: '/',
    },
  ];

  return <Table columns={columns} data={data} />;
};

export default MeetingLog;
