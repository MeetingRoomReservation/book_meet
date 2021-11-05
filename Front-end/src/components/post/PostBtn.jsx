import React from 'react';
import styled, { css } from 'styled-components';

const VARIANTS = {
  // success: 'background: #28a745;',
  warning: css`
    background: #d50000;
    &:hover {
      background: #d55000;
    }
  `,
};

const SIZE = {
  md: css`
    width: 200px;
    margin-left: 10px;
    float: right;
  `,
};

const Button = styled.button`
  background: #294050;
  width: 100px;
  height: 35px;
  color: #fff;
  cursor: pointer;
  padding: 5px;
  border: none;
  border-radius: 2em;
  ${(p) => p.variantStyle}
  ${(p) => p.sizeStyle}
`;

// + size
const PostBtn = ({ disabled, size, variant, children }) => {
  const variantStyle = VARIANTS[variant];
  const sizeStyle = SIZE[size];

  return (
    <Button disabled={disabled} variantStyle={variantStyle} sizeStyle={sizeStyle}>
      {children}
    </Button>
  );
};

export default PostBtn;
