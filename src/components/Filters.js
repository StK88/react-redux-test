import React from 'react';
import SortLink from '../containers/SortLink';

const Filters = () => (
  <ul className="sorting__filter">
    <li>Sort by:</li>
    <li><SortLink sortBy="NEW_ADDED">New</SortLink></li>
    <li><SortLink sortBy="LATEST_ADDED">Old</SortLink></li>
    <li><SortLink sortBy="A_Z">[0-9]A-Z</SortLink></li>
    <li><SortLink sortBy="Z_A">Z-A[0-9]</SortLink></li>
    <li><SortLink sortBy="SELECTED">Selected</SortLink></li>
    <li><SortLink sortBy="UNSELECTED">Unselected</SortLink></li>
  </ul>
);

export default Filters;
