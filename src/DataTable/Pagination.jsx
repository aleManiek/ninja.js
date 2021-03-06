import React from 'react';

import Page from './Page';

const Pagination = ({ currentPageNumber, totalNumberOfPages, onChange }) => {
  const pages = [...Array(totalNumberOfPages).keys()].map((pageNumber) => (
    <Page key={pageNumber} currentPageNumber={currentPageNumber} pageNumber={pageNumber} onChange={onChange} />
  ));

  return pages.length <= 1 ? null : <ul className='pagination'>{pages}</ul>;
};

export default Pagination;
