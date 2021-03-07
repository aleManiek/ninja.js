import React, { useState } from 'react';

import Pagination from './Pagination';
import Row from './Row';
import Search from './Search';

const calculateTotalNumberOfPages = (rows, rowsPerPage) => (rowsPerPage <= 0 ? 0 : Math.ceil(rows.length / rowsPerPage));

const DataTable = ({ rows, rowsPerPage = 40 }) => {
  const [pageRows, setPageRows] = useState(rows);
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const [totalNumberOfPages, setTotalNumberOfPages] = useState(calculateTotalNumberOfPages(rows, rowsPerPage));

  const search = (event) => {
    const text = event.target.value.toLowerCase();
    const rowsFound = rows.filter((row) => row.name1.toLowerCase().search(text) > -1 || row.email?.toLowerCase().search(text) > -1);
    setPageRows(rowsFound);
    setTotalNumberOfPages(calculateTotalNumberOfPages(rowsFound, rowsPerPage));
    setCurrentPageNumber(0);
  };

  const changePage = (pageNumber) => setCurrentPageNumber(pageNumber);

  const rowsInPageNumber = (pageNumber) => {
    const startIndex = pageNumber * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return [startIndex, endIndex];
  };

  const rowsToRender = pageRows.map((row) => <Row key={row.per_id} row={row} />).slice(...rowsInPageNumber(currentPageNumber));

  return (
    <div>
      <Search onSearch={search} />
      <table>
        <tbody>{rowsToRender}</tbody>
      </table>
      <Pagination currentPageNumber={currentPageNumber} totalNumberOfPages={totalNumberOfPages} onChange={changePage} />
    </div>
  );
};

export default DataTable;
