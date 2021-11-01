import React from 'react';
import { PageNav, PageUl, PageLi } from '@components/post/styles';
import { Link } from 'react-router-dom';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const onClickLink = () => {
    // paginate(number)
  };

  return (
    <PageNav>
      <PageUl>
        <PageLi>Prev</PageLi>
        {pageNumbers.map((number) => (
          <PageLi key={number}>
            <Link to="/" style={{ padding: '10px' }}>
              {number}
            </Link>
          </PageLi>
        ))}
        <PageLi>Next</PageLi>
      </PageUl>
    </PageNav>
  );
};

export default Pagination;
