import React, { useState } from 'react';
import Table from '@components/table/Table';
import { FilePdfOutlined } from '@ant-design/icons';
import { NoticeContainer, LinkBtn } from '@components/post/styles';
import { Link } from 'react-router-dom';
import 'components/table/TableStyles.scss';

const NoticeList = () => {
  const onClickAttachments = () => {};

  const [data, setData] = useState([
    {
      id: '1',
      title: '개인정보 처리 방침 변경 안내',
      attach: false,
      date: '2021.01.01',
    },
    {
      id: '2',
      title: '합병에 따른 개인(신용)정보 이전 안내',
      attach: true,
      date: '2021.01.01',
    },
    {
      id: '3',
      title: 'FY2020 외부감사인 선임 공고',
      attach: false,
      date: '2021.01.01',
    },
    {
      id: '4',
      title: '개인정보 처리 방침 변경 안내',
      attach: true,
      date: '2021.01.01',
    },
    {
      id: '5',
      title: '개인정보 처리 방침 변경 안내',
      attach: false,
      date: '2021.01.01',
    },
    {
      id: '6',
      title: '개인정보 처리 방침 변경 안내',
      attach: true,
      date: '2021.01.01',
    },
    {
      id: '7',
      title: '개인정보 처리 방침 변경 안내',
      attach: false,
      date: '2021.01.01',
    },
    {
      id: '8',
      title: '간이 합병 공고',
      attach: true,
      date: '2021.01.01',
    },
    {
      id: '9',
      title: '개인정보 처리 수탁사 변경 안내',
      attach: false,
      date: '2021.01.01',
    },
    {
      id: '10',
      title: '개인정보 처리 방침 변경 안내 (서비스 사항)',
      attach: true,
      date: '2021.01.01',
    },
    {
      id: '11',
      title: '개인정보 처리 방침 변경 안내',
      attach: false,
      date: '2021.01.01',
    },
    {
      id: '12',
      title: '개인정보 처리 방침 변경 안내',
      attach: true,
      date: '2021.01.01',
    },
  ]);

  const columns = [
    {
      title: '번호',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
      width: 60,
    },
    {
      title: '제목',
      dataIndex: 'title',
      key: 'title',
      align: 'center',
      width: 300,
      render: (title, data) => (
        <>
          <Link
            to={{
              pathname: `/notices/${data.id}`,
              state: {
                title,
                data,
              },
            }}
          >
            {title}
          </Link>
        </>
      ),
    },
    {
      title: '첨부파일',
      dataIndex: 'attach',
      key: 'attach',
      align: 'center',
      width: 80,
      render: (attach) =>
        attach ? (
          <>
            <FilePdfOutlined style={{ color: 'red' }} onClick={onClickAttachments} />
          </>
        ) : null,
    },
    {
      title: '회의일',
      dataIndex: 'date',
      key: 'date',
      align: 'center',
      width: 100,
    },
  ];

  return (
    <NoticeContainer>
      <h2 style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '1em', textAlign: 'center' }}>공지사항</h2>
      <Table
        columns={columns}
        data={data.sort((a, b) => {
          return b.id - a.id;
        })}
      />
      <LinkBtn to="/notices/writing">작성하기</LinkBtn>
    </NoticeContainer>
  );
};

export default NoticeList;
