// TailwindTable.jsx

import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from './ui/table';

const TailwindTable = ({ columns, data }) => {
  return (
    <Table className='min-w-full  rounded-3xl mt-3'>
      <TableRow>
        {columns.map((column, index) => (
          <TableHead
            key={index}
            className={`px-6 py-4 whitespace-nowrap ${column.className || ''}`}
            scope='col'
          >
            {column.headerTitle || column.header}
          </TableHead>
        ))}
      </TableRow>
      <TableBody className='divide-y divide-gray-200/10 '>
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {columns.map((column, colIndex) => (
              <TableCell
                key={colIndex}
                className={`px-6 py-4 whitespace-nowrap  text-white/80 ${
                  column.className || ''
                }`}
              >
                {column.cell ? column.cell({ row }) : row[column.accessorKey]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TailwindTable;
