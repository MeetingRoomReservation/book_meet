import React, { useCallback } from 'react';
import { TableContainer, Tables, Thead, Th, Tr, Tbody, Td } from '@components/table/styles';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

const Table = ({ data, columns }) => {
  const getKeys = (data) => {
    return Object.keys(data);
  };

  const generateTableData = useCallback((data) => {
    return data.map((v) => (
      <Tr key={uuidv4()}>
        {getKeys(v)?.map((key) =>
          v[key] !== true ? (
            key === 'title' ? (
              <Td key={uuidv4()}>
                <Link to={v['url']}>{v[key]}</Link>
              </Td>
            ) : (
              key !== 'url' && <Td key={uuidv4()}>{v[key]}</Td>
            )
          ) : (
            <Td key={uuidv4()}>
              <Link to="/" style={{ color: '000' }}>
                📄
              </Link>
            </Td>
          ),
        )}
      </Tr>
    ));
  }, []);

  return (
    <TableContainer>
      <Tables>
        <Thead>
          <Tr>
            {columns?.map((column) => (
              <Th key={uuidv4()}>{column}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>{generateTableData(data)}</Tbody>
      </Tables>
    </TableContainer>
  );
};

export default Table;
