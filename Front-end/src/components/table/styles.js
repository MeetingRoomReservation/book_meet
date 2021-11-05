import styled, { css } from 'styled-components';

export const TableContainer = styled.div`
  min-width: 60vw;
  margin: 0 auto 20px;
`;

export const Tables = styled.table`
  width: 100%;
  text-align: center;
  word-break: keep-all;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  border-bottom: 2px solid;
`;

export const Th = styled.th`
  padding: 15px;
  font-weight: 800;
`;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  border-bottom: 1px solid;
  padding: 15px;
`;

export const Td = styled.td`
  padding: 15px;
  ${(props) =>
    props.title &&
    css`
      &: hover {
        font-weight: bold;
      }
    `}
`;
