import React from 'react';
import { Link } from 'react-router';
import Form from '../Form';
import Filters from '../Filters';
import SortFieldList from '../../containers/SortFieldList';

const HomePage = () => {
  return (
    <div>
      <h1>React-Redux Sorting</h1>
      <Form />
      <SortFieldList />
      <Filters />
    </div>
  )
}

export default HomePage;
