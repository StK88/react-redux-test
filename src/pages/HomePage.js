import React from 'react';
import Form from '../components/Form';
import Filters from '../components/Filters';
import SortFieldList from '../containers/SortFieldList';

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
